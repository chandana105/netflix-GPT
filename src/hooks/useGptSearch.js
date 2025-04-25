import { useDispatch } from "react-redux";
import { useState } from "react";
import { API_OPTIONS, NETFLIX_GPT_API_URL } from "../utils/constants";
import { addGptMoviesResults } from "../store/gptSlice";

const useGptSearch = (searchTextRef) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const message = searchTextRef.current.value;

    // Make an API call to GPT API and get movie Results
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : ${message} and only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Fannah,Fighter,Pathaan,Jawaan,War`;

    try {
      const response = await fetch(NETFLIX_GPT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: gptQuery }],
          model: "gpt-3.5-turbo",
        }),
      });

      const gptSearchResults = await response.json();

      if (!gptSearchResults.choices) {
        setErrorMessage("GPT search failed. Please try again.");
        return;
      }

      const gptMovies = gptSearchResults.choices[0].message.content.split(",");

      // for each of these movies ll try to find out the search in tmdb movie api
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      // we ll get [Promise1, promise 2 ....]

      // resolving array of Promises
      const tmdbResults = await Promise.all(promiseArray);

      // Pushing movies names and movieresults to store
      dispatch(
        addGptMoviesResults({
          movieNames: gptMovies,
          movieResults: tmdbResults,
        })
      );

      setErrorMessage(""); // clear error message if successful
    } catch (error) {
      setErrorMessage("An error occurred while searching. Please try again.");
      console.error("API call failed:", error);
    }
  };

  return { handleGptSearchClick, errorMessage };
};

export default useGptSearch;

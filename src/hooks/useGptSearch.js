import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import openai from "../utils/openai";
import { addGptMoviesResults } from "../utils/gptSlice";

const useGptSearch = (searchTextRef) => {
  const dispatch = useDispatch();

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

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptSearchResults.choices) {
      //TODO: error handling pg (show it below the aearch bar that gpt search failed)
    }

    const gptMovies = gptSearchResults.choices[0].message.content.split(",");

    // for each of these movies ll try to find out the search in tmdb movie api
    // FOR EACH MOVIE I WAILL SEARCH TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // it ll provide all the array of promies
    // [Promise1, promise 2 ....]

    // to resolve all the prpmises and get one result of array

    const tmdbResults = await Promise.all(promiseArray);

    // once we get these movies, we should push them in the store and then use in moivesuggestions comp

    dispatch(
      addGptMoviesResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return handleGptSearchClick;
};

export default useGptSearch;

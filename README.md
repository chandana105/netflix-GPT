# NETFLIX GPT

NETFLIX GPT is an advanced movie recommendation platform integrating OpenAI's GPT APIs for personalized movie suggestions, powered by TMDB API. Built with Reactjs, Redux Toolkit, Firebase for authentication, and TailwindCSS for a modern and responsive user experience.

- Live demo: [VidInteract](https://vidinteract.netlify.app/)

# Tech Stack

- Reactjs: JavaScript library for building user interfaces.
- Redux Toolkit: State management library for handling application state.
- React Router DOM: Declarative routing for React applications.
- TailwindCSS: Utility-first CSS framework for rapid UI development.
- React Icons: Library of popular icons for React applications.
- Firebase: Backend service for authentication and data management.
- OpenAI: API for advanced natural language processing tasks.
- TMDB API: Provides access to movie and TV show data.

# Features

- ### SignIn/SignUp (Authentication) Page

  - SignIn / SignUp Form:
    - Implemented a unified form for both sign-in and sign-up functionalities.
    - Added custom form validations using custom validation functions without relying on external libraries.
  - Firebase Authentication:
    - Configured Firebase for backend authentication.
    - Created user accounts using Firebase during sign-up.
    - Implemented Sign In and Sign Out functionalities via Firebase APIs.
    - Updated user profile details upon authentication.
    - Utilized Firebase's onAuthStateChanged API to manage user authentication state at the central level of the application.
  - State Management:
    - Used Redux store to manage user authentication state, ensuring consistent tracking of whether a user is signed in or signed out.

- ### Browse Page

  - Data Fetching:
    - Fetched movies and series data from the TMDB database using various APIs.
  - Main Trailer Display:
    - Displayed the trailer of a trending series in the background with an overlapping description.
  - Category-Based Lists:
    - Showcased different series and movie lists based on various categories such as popular, latest, and on-air.
  - State Management:
    - Utilized Redux store to persist these lists until the page refreshes, ensuring efficient state management and data persistence during the user's visit.

- ### NetflixGPT Page

  - GPT Search Bar and Movie Suggestions:
    - Implemented a GPT search button and search bar for user interaction.
    - Provided movie suggestions based on GPT search queries.
  - State Management with Redux:
    - Created a Redux slice to manage state for GPT-related functionalities.
    - Enabled multilingual support with a language-changing feature in the GPT search component.
  - API Integration:
    - Integrated OpenAI API to fetch GPT-based movie suggestions.
    - Utilized TMDB API to gather movie recommendations for enhanced user experience.
  - Component Reusability:
    - Demonstrated reusability by adapting the SeriesList component to display movie suggestions, promoting efficient and scalable development practices.

- ## Additional Details

  - Performance Improvements: Optimized code for enhanced performance.
  - Centralized hardcoded values in a constants file for improved code maintenance and management.
  - Memoization: Implemented memoization to avoid redundant API calls and optimize data fetching.
  - Ensured clean and readable code by separating concerns and implementing custom hooks for various logic and features, such as useTrendingSeries for fetching TV series lists and other categories.

# Screenshots

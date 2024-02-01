export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const LOGIN_PAGE_BG_IMAGE =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const USER_AVATAR =
  "https://occ-0-4189-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"; //DEFAULT USER AVATAR

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer  ${process.env.REACT_APP_TMDB_TOKEN}`,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SIGN_OUT_BUTTON_TEXT = "Sign out of Netflix";
export const GPT_SEARCH_BUTTON_TEXT = "GPT Search";
export const HOME_BUTTON_TEXT = "Home";
export const SIGN_IN_BUTTON_TEXT = "Sign In";
export const SIGN_UP_BUTTON_TEXT = "Sign Up";
export const NEW_TO_NETFLIX = "New to Netflix?";
export const ALREADY_REGISTERED = "Already Registered? ";
export const SIGN_UP_NOW = "Sign up now";
export const SIGN_IN_NOW = "Sign In Now";
export const LATEST = "Latest";
export const ON_THE_AIR = "On The Air";
export const POPULAR = "Popular";
export const TOP_RATED = "Top Rated";
export const PLAY_BUTTON_TEXT = "Play";
export const MORE_INFO = "More Info";

export const lang = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "pb", name: "Punjabi" },
  { identifier: "ko", name: "Korean" },
];

export const languageWords = {
  inputText: {
    en: "What do you want to search?",
    hindi: "आप क्या खोजना चाहते हैं?",
    pb: "ਤੁਸੀਂ ਕੀ ਖੋਜਣਾ ਚਾਹੁੰਦੇ ਹੋ?",
    ko: "무엇을 검색하시겠습니까? mueos-eul geomsaeghasigessseubnikka?",
  },
  searchBtn: {
    en: "Search",
    hindi: "खोज",
    pb: "ਖੋਜ",
    ko: "찾다 chajda",
  },
};

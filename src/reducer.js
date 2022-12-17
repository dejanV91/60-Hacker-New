import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        page: action.payload.page,
        nbPages: action.payload.nbPages,
      };
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter((story) => story.objectID !== action.payload),
      };
    case HANDLE_SEARCH:
      return { ...state, query: action.payload };

    case HANDLE_PAGE:
      let page = state.page;
      let nbPages = state.nbPages;

      if (action.payload === "desc") {
        if (page < 1) {
          page = nbPages;
        }
        page = page - 1;
      }
      if (action.payload === "incr") {
        if (page > nbPages) {
          page = 0;
        }
        page = page + 1;
      }

      return { ...state, page: page, nbPages: nbPages };

    default:
      return new Error("Not find action type");
  }
};
export default reducer;

import authors from "../data";

const initialState = {
  authors: authors
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload) //copy all of the old state, and only manipulate the part we want to manipulate.
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(author => author !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;

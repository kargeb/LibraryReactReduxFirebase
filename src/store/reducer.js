export const ADD_BOOK = "ADD_BOOK";

const initialState = {
  books: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      console.log("jestem w addBOOK");
      const newBooks = [...state.books, action.payload];

      return {
        ...state,
        books: newBooks
      };
    }
    default: {
      console.warn(`Unknow action ${action.type}`);
      console.log("jeste w default");
      return { ...state };
    }
  }
};

export const addBook = book => dispatch => {
  dispatch({ type: ADD_BOOK, payload: book });
};

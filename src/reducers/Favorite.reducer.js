export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, { url: action.url, name: action.name }];
    case REMOVE_FAVORITE:
      return state.filter((item) => item.url !== action.url);
    default:
      return state;
  }
};

export default reducer;

export const ADD_FIGHTER = 'ADD_FIGHTER';
export const REMOVE_FIGHTER = 'REMOVE_FIGHTER';

const FightersReducer = (state, action) => {
  switch (action.type) {
    case ADD_FIGHTER:
      if (state.length < 4) {
        return [...state, action.url];
      }
      return [...state];
    case REMOVE_FIGHTER:
      console.info('______state', state);
      console.info('______action.url', action.url);
      console.info('______', state.filter((url) => url !== action.url));
      return state.filter((url) => url !== action.url);
    default:
      return state;
  }
};
export default FightersReducer;

import { ADD_ARTICLE } from "../constants/constants.js";

const initialState = {
    articles: []
};
  
// reducers cannot change state, so a new obj must be returned with the payload
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return { articles: [...state.articles, action.payload] }
  }
  return state;
}

export default rootReducer;
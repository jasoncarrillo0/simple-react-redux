import { ADD_ARTICLE } from "../constants/constants.js";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};
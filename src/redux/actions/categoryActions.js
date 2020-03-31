import {
  CATEGORY_API_REQUEST,
  CATEGORY_API_SUCCESS,
  CATEGORY_API_ERROR
} from "../types.js";

export const categorySuccess = (cid, data) => ({
  type: CATEGORY_API_SUCCESS,
  payload: { cid, data }
});

export const categoryError = data => ({
  type: CATEGORY_API_ERROR,
  payload: data
});

export const categoryRequest = cid => {
  return dispatch => {
    if (cid) {
      fetch(
        `https://demob2b2cpreview.avetti.io/preview/uservices/1.0.2/category-page/20180521148/cid/${cid}/lang/en/`
      )
        .then(res => res.json())
        .then(json => dispatch(categorySuccess(cid, json[1].items)))
        .catch(err => dispatch(categoryError(err)));
    }
  };
};

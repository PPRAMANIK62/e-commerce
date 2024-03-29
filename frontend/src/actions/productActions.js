import axios from "axios";
import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

export function getProducts() {
  return async function (dispatch) {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST });

      const { data } = await axios.get("/api/v1/products");

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}

export function getProductDetails(id) {
  return async function (dispatch) {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/product/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
}

export function clearErrors() {
  return async function (dispatch) {
    dispatch({ type: CLEAR_ERRORS });
  };
}

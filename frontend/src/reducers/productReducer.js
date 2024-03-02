import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

const initialState = {
  isLoading: false,
  products: [],
  productsCount: 0,
  error: null,
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      };
    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}

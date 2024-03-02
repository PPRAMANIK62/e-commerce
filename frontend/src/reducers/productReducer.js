import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstants";

const initialStateProduct = {
  isLoading: false,
  products: [],
  productsCount: 0,
  error: null,
};

const initialStateDetails = {
  isLoading: false,
  product: {},
  error: null,
};

export function productReducer(state = initialStateProduct, action) {
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

export function productDetailsReducer(state = initialStateDetails, action) {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload.product,
      };
    case PRODUCT_DETAILS_FAIL:
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

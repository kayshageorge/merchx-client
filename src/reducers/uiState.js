import localStore from '../lib/localStore';

const getBand = () => localStore.get('currentBand') || {};
const getCart = () => localStore.get('cart') || [];

const initialState = {
  allProducts: [],
  currentProduct: {},
  currentBand: getBand(),
  productSkus: [],
  cart: getCart(),
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload
      }
    case 'UPDATE_CURRENT_PRODUCT':
      return {
        ...state,
        currentProduct: action.payload
      }
    case 'UPDATE_CURRENT_BAND':
      return {
        ...state,
        currentBand: action.payload,
        errors: undefined
      }
    case 'UPDATE_ERROR_STATE':
      return {
        ...state,
        errors: action.payload
      }
    case 'UPDATE_PRODUCT_SKUS':
      return {
        ...state,
        productSkus: action.payload
      }
    case 'UPDATE_CART':
    console.log('reducer', action.payload)
      return {
        ...state,
        cart: action.payload
      }
    default:
      return state;
  }
}

import localStore from '../lib/localStore';

const getBand = () => localStore.get('currentBand') || {};

const initialState = {
  allProducts: [],
  currentProduct: {},
  currentBand: getBand(),
  productSkus: [],
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ALL_PRODUCTS': {
      return Object.assign({}, state, { allProducts: action.payload });
    }
    case 'UPDATE_CURRENT_PRODUCT': {
      return Object.assign({}, state, { currentProduct: action.payload });
    }
    case 'UPDATE_CURRENT_BAND': {
      return Object.assign({}, state, { currentBand: action.payload, errors: undefined });
    }
    case 'UPDATE_ERROR_STATE': {
      return Object.assign({}, state, { errors: action.payload });
    }
    case 'UPDATE_PRODUCT_SKUS': {
      return Object.assign({}, state, { productSkus: action.payload });
    }
    default:
      return state;
  }
}

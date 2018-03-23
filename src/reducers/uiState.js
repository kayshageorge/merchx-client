import localStore from '../lib/localStore';

const initialState = {
  allProducts: [],
  currentProduct: {},
  currentBand: localStore.get('currentBand'),
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
      return Object.assign({}, state, { currentBand: action.payload });
    }
    default:
      return state;
  }
}

const initialState = {
  allProducts: [],
  currentProduct: {},
  currentBand: '',
}

export default function formStore(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ALL_PRODUCTS': {
      // state.selectedBand
      // const selectedProducts = action.payload.filter(product => product.band === state.selectedBand);
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

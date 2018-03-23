const actions = {
  updateAllProducts: (products) => {
    return { type: 'UPDATE_ALL_PRODUCTS', payload: products }
  },
  updateCurrentProduct: (product) => {
    return { type: 'UPDATE_CURRENT_PRODUCT', payload: product }
  },
  updateCurrentBand: (band) => {
    return { type: 'UPDATE_CURRENT_BAND', payload: band }
  },
  updateErrorState: (error) => {
    return { type: 'UPDATE_ERROR_STATE', payload: error}
  }
}

export default actions;

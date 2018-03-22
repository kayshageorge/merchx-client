const actions = {
  updateAllProducts: (products) => {
    return { type: 'UPDATE_ALL_PRODUCTS', payload: products }
  },
  updateCurrentProduct: (product) => {
    return { type: 'UPDATE_CURRENT_PRODUCT', payload: product }
  },
  updateCurrentBand: (band) => {
    return { type: 'UPDATE_CURRENT_BAND', payload: band }
  }
}

export default actions;

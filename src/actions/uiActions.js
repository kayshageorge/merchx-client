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
  },
  updateProductSkus: (skus) => {
    return { type: 'UPDATE_PRODUCT_SKUS', payload: skus }
  },
  updateCart: (pendingLineItems) => {
    return { type: 'UPDATE_CART', payload: pendingLineItems }
  },
  updateTotal: (amount) => {
    return { type: 'UPDATE_TOTAL', payload: amount }
  }
}

export default actions;

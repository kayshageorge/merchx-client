const actions = {
  updateUser: (user) => {
    return { type: 'UPDATE_USER', payload: user }
  },
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
  }
}

export default actions;

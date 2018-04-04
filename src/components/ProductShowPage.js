import React from 'react';
import { Product, Band, Sku } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import ImageGallery from './ImageGallery';
import ProductShowDetails from './ProductShowDetails';

class ProductShowPage extends React.Component {

  componentWillMount() {
    Product.one(this.props.match.params.id).then(data => {
      this.props.updateCurrentProduct(data)
    }),
    Sku.all(this.props.match.params.id).then(data => {
      this.props.updateProductSkus(data)
    })
  }

  render() {
    const product = this.props.currentProduct;
    const productSkus = this.props.productSkus;
    return(
      <div className="getsBackground" style={{height: '100vh'}}>
        <ImageGallery image={product.images}/>
        <ProductShowDetails product={product} productSkus={productSkus}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.currentProduct,
    currentBand: state.currentBand,
    productSkus: state.productSkus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentProduct: (product) => dispatch(uiActions.updateCurrentProduct(product)),
    updateProductSkus: (skus) => dispatch(uiActions.updateProductSkus(skus)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowPage);

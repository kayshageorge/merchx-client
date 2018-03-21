import React from 'react';
import { Product, Band } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';
import ImageGallery from './ImageGallery';
import ProductShowDetails from './ProductShowDetails';

class ProductShowPage extends React.Component {

  componentDidMount() {
    // console.log(this.props)
    Product.one(this.props.match.params.id).then(data => {
      this.props.updateCurrentProduct(data)
    })

  }

  render() {
    const product = this.props.currentProduct;
    return(
      <div>
        <ImageGallery image={product.images}/>
        <ProductShowDetails product={product}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentProduct: state.currentProduct,
    currentBand: state.currentBand,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCurrentProduct: (product) => dispatch(uiActions.updateCurrentProduct(product)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductShowPage);

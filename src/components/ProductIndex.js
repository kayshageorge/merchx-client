import React from 'react';
import ProductCard from './ProductCard';
import { Product, Band } from '../lib/requests';
import { connect } from 'react-redux';
import uiActions from '../actions/uiActions';


class ProductIndex extends React.Component {

  componentDidMount() {
    Product.all(this.props.match.params.id).then(data => {
      this.props.updateAllProducts(data)
    })
    Band.one(this.props.match.params.id).then(data => {
      this.props.updateCurrentBand(data)
    })
  }

  render() {
    const products = this.props.allProducts;
    const band = this.props.currentBand;

    return(
      <div>
        { products.map((product, key) =>
          <ProductCard product={product} key={key} />
        ) }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.allProducts,
    currentBand: state.currentBand
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateAllProducts: (products) => dispatch(uiActions.updateAllProducts(products)),
    updateCurrentBand: (band) => dispatch(uiActions.updateCurrentBand(band)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductIndex);

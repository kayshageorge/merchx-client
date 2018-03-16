import React from 'react';
import ProductCard from './ProductCard';
import Header from './Header';
import { Product } from '../lib/requests';

class ProductIndex extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    Product.all(1).then(data => this.setState({ products: data }))
  }

  render() {
    const { products } = this.state;

    return(
      <div>
        <Header band={"Belle and Sebastian"}/>
        { products.map(product =>
          <ProductCard product={product} />
        ) }
      </div>
    )
  }
}

export default ProductIndex;

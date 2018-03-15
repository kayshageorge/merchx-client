import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../lib/requests';

class ProductIndex extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    Product.all(1).then(data => this.setState({ products: data }))
  }

  render() {
    const { products } = this.state;

    return(
      <div>
        {products.map(product =>
          <ProductCard product={product} />
        )}
      </div>
    )
  }
}

export default ProductIndex;

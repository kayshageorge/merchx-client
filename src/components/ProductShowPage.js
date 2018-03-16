import React from 'react';
import Header from './Header';
import ImageGallery from './ImageGallery';
import ProductShowDetails from './ProductShowDetails';
import { Product } from '../lib/requests';

class ProductShowPage extends React.Component {
  state = {
    product: {},
    loading: true
  };

  componentDidMount() {
    Product.one(2).then(data => this.setState({ product: data, loading: false }))
  }

  render() {
    const { product, loading } = this.state;
    if (loading) {
      return <div>Loading....</div>
    }
    return(
      <div>
        <Header band={product.band.band_name} />
        <ImageGallery image={product.images}/>
        <ProductShowDetails product={product}/>
      </div>
    )
  }
}

export default ProductShowPage;

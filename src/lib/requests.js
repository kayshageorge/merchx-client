const DOMAIN = 'localhost:3000';
const BASE_URL = `http://${DOMAIN}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYmFuZF9uYW1lIjoiQmVsbGUgYW5kIFNlYmFzdGlhbiIsImV4cCI6MTUyMjM0OTU3Mn0.8bWV0a1wOea2Kw1NMANA6VZafKCTWDjejIOQ3frc1uc';

const Product = {
  all (band_id) {
    return fetch(
      `${BASE_URL}/users/${band_id}/products`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
    .then(res => res.json());
  },

  one (product_id) {
    return fetch(
      `${BASE_URL}/products/${product_id}`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
    .then(res => res.json());
  }
};

const Band = {
  one (band_id) {
    return fetch(
      `${BASE_URL}/users/${band_id}`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
    .then(res => res.json());
  },
  search (band_name) {
    return fetch(
      `${BASE_URL}/users/search`,
      {
        method: 'post',
        headers: {
          'Authorization': JWT,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({search: band_name})
      }
    )
    .then(res => res.json());
  }
};

const Sku = {
  all (product_id) {
    return fetch(
      `${BASE_URL}/products/${product_id}/skus`,
      {
        headers: {
          'Authorization': JWT,
        },
      }
    )
    .then(res => res.json());
  },
  one (id) {
    return fetch(
      `${BASE_URL}/skus/${id}`,
      {
        headers: {
          'Authorization': JWT,
        },
      }
    )
    .then(res => res.json());
  },
  search (product_id, size) {
    return fetch(
      `${BASE_URL}/skus/search`,
      {
        method: 'post',
        headers: {
          'Authorization': JWT,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ product: product_id, selected_size: size })
      }
    )
    .then(res => res.json());
  }
};

export { Product, Band, Sku };

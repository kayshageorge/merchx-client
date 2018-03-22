const DOMAIN = 'localhost:3000';
const BASE_URL = `http://${DOMAIN}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYmFuZF9uYW1lIjoiQmVsbGUgYW5kIFNlYmFzdGlhbiIsImV4cCI6MTUyMTc3NTc1NH0.zGTJ4im6GasdrTleYtDIX5GiqdXOf0Q4KxW2-tNK_Vw';

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

export { Product, Band };

const DOMAIN = 'localhost:3000';
const BASE_URL = `http://${DOMAIN}`;
const JWT = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiYmFuZF9uYW1lIjoiQmVsbGUgYW5kIFNlYmFzdGlhbiIsImV4cCI6MTUyMTE2OTQ0NH0.COTRric5_XZzxuYKIFpsQMkfYt1kwVQTF1mkz9su-Zc';

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

  one (band_id, product_id) {
    return fetch(
      `${BASE_URL}/users/${band_id}/products/${product_id}`,
      {
        headers: {
          'Authorization': JWT
        }
      }
    )
    .then(res => res.json());
  }
};

export {Product};

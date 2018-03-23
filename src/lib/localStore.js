export default {
  set(key, object) {
    return object && localStorage.setItem(key, JSON.stringify(object))
  },
  get(key) {
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  }
}

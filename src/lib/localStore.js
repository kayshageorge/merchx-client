export default {
  set(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
    return true
  },
  get(key) {
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
  }
}

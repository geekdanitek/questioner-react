const get = key => localStorage.getItem(key);
const remove = key => localStorage.removeItem(key);
export {
  get,
  remove
};

export default (state, action) => {
  const { type, products } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state };
    case "GET_PRODUCTS":
      return { ...state, products };
    default:
      return state;
  }
};

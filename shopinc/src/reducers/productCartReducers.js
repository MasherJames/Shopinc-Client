export default (state, action) => {
  const { type, item } = action;

  switch (type) {
    case "ADD_ITEM_TO_CART":
      state.cartTotal++;
      if (state.cart.findIndex(product => product.name === item.name) !== -1) {
        const newCart = state.cart.reduce((cartAcc, product) => {
          if (product.name === item.name) {
            product.count++;
            cartAcc.push({ ...product });
          } else {
            cartAcc.push(product);
          }

          return cartAcc;
        }, []);
        return { ...state, newCart };
      }

      return { ...state, cart: [...state.cart, { ...item, count: 1 }] };

    case "REMOVE_ITEM_FROM_CART":
      return { ...state };
    default:
      return state;
  }
};

export default (state, action) => {
  const { type, item } = action;

  switch (type) {
    case "ADD_ITEM_TO_CART":
      state.cartTotal++;
      let updatedCart = [...state.cart];
      if (updatedCart.length === 0) {
        updatedCart.push({ ...item, count: 1 });
      } else if (updatedCart.length > 0) {
        for (let i = 0; i < updatedCart.length; i++) {
          let currItem = updatedCart[i];
          if (item.name === currItem.name) {
            currItem.count++;
          } else if (item.name !== currItem.name) {
            updatedCart.push({ ...item, count: 1 });
          }
        }
      }

      return { ...state, cart: updatedCart };

    case "REMOVE_ITEM_FROM_CART":
      return { ...state };
    default:
      return state;
  }
};

/*eslint-disable*/
export const addItemsToCart = (product, state) => {
  let cart = [];
  const existedProduct = state.cart.find(
    (foundProduct) => foundProduct.id === product.id
  );

  if (existedProduct) {
    cart = state.cart.map((p) => {
      if (p.id === existedProduct.id) {
        return { ...existedProduct, quantity: existedProduct.quantity + 1 };
      }
    });
  } else {
    product.quantity = 1;
    cart = [...state.cart, product];
  }

  const total = calcTotal(cart);
  return { cart, total };
};
function calcTotal(cart = []) {
  return (
    cart.length > 0 &&
    cart.map((p) => +p.price * +p.quantity).reduce((acc, next) => acc + next, 0)
  );
}
export const decreaseQuantity = (product, cart) => {
  if (product.quantity > 1) {
    product.quantity--;
  } else {
    product.quantity = 1;
  }
  const total = calcTotal(cart);
  return { cart, total };
};
export const increaseQuantity = (product, cart) => {
  product.quantity++;
  const total = calcTotal(cart);
  return { cart, total };
};
export const removeItem = (product, cart) => {
  cart = cart.filter((p) => p.id !== product.id);
  const total = calcTotal(cart);
  return { total, cart };
};

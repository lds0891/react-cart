export function cart (store) {
  store.on('@init', () => ({ cart: [] }))

  store.on('cart/add', ({ cart }, addCartItem) => {

    let indexId = cart.findIndex((item) => item.id === addCartItem.id);

    if(indexId === -1) {
      return {
        cart: [...cart, addCartItem]
      }
    } else {
      if (cart[indexId].quantity < cart[indexId].quantityMax) {
        cart[indexId].quantity = cart[indexId].quantity + 1;
      } else if (cart[indexId].quantity >= cart[indexId].quantityMax) {
        cart[indexId].quantity = cart[indexId].quantityMax;
      }

      return {
        cart: [...cart]
      }
    }
  })

  store.on('cart/quantity', ({cart}, cartItem) => {
    let indexId = cart.findIndex((item) => item.id === cartItem.id);

    if(indexId >= 0) {
        cart[indexId].quantity = cartItem.quantity;

      return {
        cart: [...cart]
      }
    }
  })

  store.on('cart/delete', ({cart}, cartItem) => {
    let indexId = cart.findIndex((item) => item.id === cartItem);

    if(indexId >= 0) {
      cart.splice(indexId, 1);

      return {
        cart: [...cart]
      }
    }
  })
}
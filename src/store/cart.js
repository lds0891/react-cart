export function cart (store) {
  store.on('@init', () => ({ cart: [] }))

  store.on('cart/add', ({ cart }, addCartItem) => {

    let indexId = cart.findIndex((item) => item.id === addCartItem.id)

    if(indexId === -1) {
      return {
        cart: [...cart, addCartItem]
      }
    } else {
      cart[indexId].quantity = cart[indexId].quantity + 1

      return {
        cart: [...cart]
      }
    }
  })

  store.on('cart/quantity', ({cart}, cartItem) => {
    let indexId = cart.findIndex((item) => item.id === cartItem.id);

    if(indexId >= 0) {
      cart[indexId].quantity = cartItem.quantity

      return {
        cart: [...cart]
      }
    }
  })

  
}
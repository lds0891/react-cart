export function cart (store) {
  store.on('@init', () => ({ cart: [] }))

  store.on('cart/add', ({ cart }, cartNewItem) => {

    let indexId = cart.findIndex((item) => item.id === cartNewItem.id)

    if(indexId === -1) {
      return {
        cart: [...cart, cartNewItem]
      }
    } else {
      cart[indexId].quantity = cart[indexId].quantity + 1

      return {
        cart: [...cart]
      }
    }
  })
}
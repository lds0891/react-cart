export function cart (store) {
  store.on('@init', () => ({ cart: [] }))

  store.on('cart/add', ({ cart }, cartNewItem) => {
    return { cart: [...cart, cartNewItem]}
  })

}
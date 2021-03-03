export function products (store) {
  store.on('@init', () => ({ products: [] }))

  store.on('products/sorting', ({ products }, productsPrice) => {
    return {}
  })

  store.on('products/filter', ({ products }, productsFilter) => {
    return {}
  })
}
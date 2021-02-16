import { createStoreon } from 'storeon'
// import { products } from './products'
import { cart } from './cart'

export const store = createStoreon([cart])
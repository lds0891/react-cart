import { createStoreon } from 'storeon'
import { cart } from './cart'

export const store = createStoreon([cart])
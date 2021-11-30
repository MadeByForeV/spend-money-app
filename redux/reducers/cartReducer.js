import { ADD_TO_CART, REMOVE_FROM_CART } from "../types/cartTypes"
import { cartItems } from "../initialValues/initalValues"

const initialState = {
    cartItems: cartItems,
    balance: 100000
}

export default function cartReducer(state = initialState, { type, payload, balance }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems?.find(c => c.product?.id === payload.id)
            if (product) {
                if (balance >= payload.price) {
                    product.quantity++;
                    return {
                        ...state,
                        cartItems: [...state.cartItems.filter(x => x.id !== payload.id)],
                        balance: balance - payload.price
                    }
                }
                return {
                    ...state,
                    cartItems: [...state.cartItems],
                    balance: balance
                }


            } else if (!product) {

                if (balance >= payload.price) {
                    return {
                        ...state,
                        cartItems: [...state.cartItems, { quantity: 1, product: payload }],
                        balance: balance-payload.price
                    }
                }else{
                    return {
                        ...state,
                        cartItems: [...state.cartItems],
                        balance: balance
                    }
                }


            }

            return {};

        case REMOVE_FROM_CART:
            let product1 = state.cartItems?.find(c => c.product.id === payload.id)

            if (product1?.quantity > 1) {
                return {
                    ...state,
                    cartItems: [...state.cartItems.filter(x => x.product.id !== payload.id), { ...product1, ...product1.quantity-- }]
                }
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.filter(c => c.product.id !== payload.id)
                }
            }

        default:
            return state
    }
}
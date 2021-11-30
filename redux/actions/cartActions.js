import { ADD_TO_CART,REMOVE_FROM_CART, RESET_CART } from "../types/cartTypes";

export function addToCart(product,balance){
    return{
        type:ADD_TO_CART,
        payload:product,
        balance:balance
    }
}

export function removeFromCart(product){
    return{
        type:REMOVE_FROM_CART,
        payload:product
    }
}

export function resetCart(){
    return{
        type:RESET_CART
    }
}
import { useMemo, useState } from "react";
import { connect, useSelector } from "react-redux"

function Cart() {

    const state = useSelector(state => state.cart.cartItems);
    

    return (
        <div className="cart-container">
            {
                state?.map(item=>(
                    <>
                        <small> {item.product.title} / {item.quantity} </small> <br />
                    </>
                ))
            }
        </div>
    )
}

export default connect()(Cart);

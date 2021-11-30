import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

function Buttons({item}) {

    const dispatch = useDispatch();
    const balance = useSelector(state => state.cart.balance);
    console.log(balance);

    return (
        <>
            <div className="btn-button">
                <button onClick={()=>dispatch(addToCart(item,balance))} >ekle</button>
            </div>
            <div className="btn-button">
                <button>çıkar</button>
            </div>
        </>
    )
}

export default Buttons

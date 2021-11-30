import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import Item from "../components/Item";
import { addToCart } from "../redux/actions/cartActions";

function Home() {

  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const balance = useSelector(state => state.cart.balance)

  return (
    <div className="items-container">
      {
        state.products.map(product=>(
          <>
            <Item item={product} />
          </>
        ))
      }
      {console.log(state)}
    </div>
  )
}

export default Home


import { useSelector } from "react-redux"

function BalanceBar() {


    const balance = useSelector(state => state.cart.balance);
    

    return (
        <>
            <div className="fixed-top balanceBar">
                <h1>
                    {balance?.toString()}
                </h1>
            </div>
        </>
    )
}

export default BalanceBar

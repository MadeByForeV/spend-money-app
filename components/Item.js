import Buttons from "./Buttons"

function Item({item}) {
    return (
        <>
            <div className="cart-item">
                <h3>{item.title}</h3>
                <small>id : {item.id}</small>
                <h4>fiyat : {item.price}</h4>
                <Buttons item={item} />
            </div>
        </>
    )
}

export default Item

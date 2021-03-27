import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({item, hideButton}) {
    const [{basket}, dispatch] = useStateValue()
    const removeFromBasket = (item) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            item: item,
        })
    }
    return (
        <div className="checkout__product">
            <img className="checkout__productImg" src={item.image} alt="" />
            <div className="checkout__productInfo">
                <p>{item.title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="product__rating">
                    {Array(item.rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                {hideButton ? null : <button onClick={() => removeFromBasket(item)}>Remove from basket</button>}
                
            </div>
        </div>
    )
}

export default CheckoutProduct

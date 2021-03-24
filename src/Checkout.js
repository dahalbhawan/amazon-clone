import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue()

    const removeFromBasket = (product) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET', 
            item: product,
        })
    }
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                alt=''/>
                <div>
                    <h3>Hello, {user && user?.email}</h3>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    <div className="checkout__items">
                        {
                            basket.map((item, i) => (
                                <div className="checkout__item">
                                    <img className="checkout__itemImg" src={item.image} alt="" />
                                    <div className="checkout__itemInfo">
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
                                        <button onClick={() => removeFromBasket(item)}>Remove from basket</button>

                                    </div>
                                </div>
                                
                            ))
                        }
                            
                    </div>
                </div>
            </div>
            <div className='checkout__right'> 
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout

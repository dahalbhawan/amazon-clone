import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            <p>{moment.unix(order.data.created).format('Do MMMM YYYY, h:mma')}</p>
            
            {order.data.basket?.map(item => (
                <CheckoutProduct item={{
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    price: item.price,
                    rating: item.rating,
                }} hideButton={true} />
            ))}
        </div>
    )
}

export default Order

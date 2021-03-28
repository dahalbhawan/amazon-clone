import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import { Typography } from '@material-ui/core'
import CurrencyFormat from 'react-currency-format'

function Order({ order }) {
    return (
        <div className='order'>
            <div className="order__title">
                <h4>Order</h4>
                <Typography variant="caption">{moment.unix(order.data.created).format('Do MMMM YYYY, h:mma')}</Typography>
            </div>
            <p className="order__id">
                <Typography variant="overline">ID: {order.id}</Typography>
            </p>
            
            {order.data.basket?.map(item => (
                <div className="order__item">
                    <CheckoutProduct item={{
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        rating: item.rating,
                    }} hideButton={true} />
                </div>
            ))}

            <CurrencyFormat
                renderText={(value) => (
                    <Typography variant="h6" className="order__total">Order Total: {value}</Typography>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order

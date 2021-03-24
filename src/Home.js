import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://i0.wp.com/www.aftvnews.com/wp-content/uploads/2015/04/amazon-fire-tv-custom-background-wallpaper-theme.jpg?w=800&quality=100&ssl=1" alt="" />
                <div className="home__row">
                    <Product 
                        id="12345"
                        title="The Lean Startup"
                        image="https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"
                        price={29.99}
                        rating={5}
                    />
                    <Product 
                        id="12346"
                        title="Over-ear Bluetooth Headphone"
                        image="https://m.media-amazon.com/images/I/61ZTcjPvOrL._AC_SX360_SY240_QL70_.jpg"
                        price={265.00}
                        rating={4}
                    />       
                </div>

                <div className="home__row">
                    <Product 
                        id="12347"
                        title="3D Printing Accessories"
                        image="https://images-na.ssl-images-amazon.com/images/I/51-cVKFY7LL._AC_.jpg"
                        price={58.75}
                        rating={4}
                    />
                    <Product
                        id="12348" 
                        title="The Pink Stuff Paste"
                        image="https://images-na.ssl-images-amazon.com/images/I/61emzBXXDdL._AC_UL480_SR480,480_.jpg"
                        price={5.95}
                        rating={5}
                    />
                    <Product 
                        id="12349"
                        title="Bluetooth Bookshelf Speaker"
                        image="https://m.media-amazon.com/images/I/91r79g3OlHL._AC_UL640_FMwebp_QL65_.jpg"
                        price={119.00}
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product 
                        id="12350"
                        title="The Lean Startup"
                        image="https://m.media-amazon.com/images/I/716Sx-vQDEL._AC_UL640_FMwebp_QL65_.jpg"
                        price={59.95}
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

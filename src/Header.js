import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import { Badge } from '@material-ui/core'
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link, useHistory } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut()
            dispatch ({
                type: 'SET_USER',
                user: null
            })
        } else {
            history.push('/login')
        }
    }
    return (
        <div className='header'>
            <div className="header__left">
                <Link to='/'>
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Amazon logo"  />
                </Link>
                <div className="header__search">
                    <input className="header__searchInput" type="text" />
                    <SearchIcon className="header__searchIcon" />
                </div>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">{'Hello, '+ (user ? user.email: 'Guest')}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                        
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <Badge color="secondary" badgeContent={basket?.length}>
                            <ShoppingBasketIcon />
                        </Badge>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header

import './Navbar.css'
import shop_logo from '../../Assets/shop_logo.webp'
import cart_logo from '../../Assets/cart_logo.jpg'
import {MdSearch} from 'react-icons/md'

function Navbar({index, setIndex, search, setSearch}) {
  return (
    <header className="navbar">
        <div className="nav-logo">
            <img src={shop_logo} alt="" />
            <p>SHOPSY</p>
        </div>
        <ul className="nav-menu">
            <li className={index === 0 ? 'active' : ''} onClick={() => setIndex(0)}>All</li>
            <li className={index === 1 ? 'active' : ''} onClick={() => setIndex(1)}>Men</li>
            <li className={index === 2 ? 'active' : ''} onClick={() => setIndex(2)}>Women</li>
            <li className={index === 3 ? 'active' : ''} onClick={() => setIndex(3)}>Kids</li>
        </ul>
        <div className="search">
          <input type="text" placeholder='search here' value={search} onChange={(e) => setSearch(e.target.value)}/> 
          <MdSearch className='search-icon'/>
        </div>
        <div className="nav-login-cart">
            <button>Login</button>
            <div className="cart">
              <img src={cart_logo} alt="" />
              <div className="nav-cart-count">0</div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
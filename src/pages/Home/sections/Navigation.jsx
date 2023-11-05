import {Routes, Route, Link} from 'react-router-dom'
import '../../../style/Home/section/nav.css'
import HomePage from '../HomePage'
import ProductPage from '../../Product/ProductPage'
// import CartPage from '../../Cart/CartPage'
function Navigation(){
    return(
        <>
            <nav id="nav_container">
                <ul id="nav_container_list">
                    <li className="nav_container_item"><Link to='/'>HOME</Link></li>
                    <li className="nav_container_item"><Link to='/Product'>CLOTHING</Link></li>
                    <li className="nav_container_item"><Link to= '/Cart'>Cart</Link></li>
                    <li className="nav_container_item">CLEARANCE SALE</li>
                </ul>
                <div id="nav_container_icons">

                </div>
            </nav>
            
            
        </>
    )
}
export default Navigation
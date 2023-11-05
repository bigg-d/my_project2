import '../../../style/Home/section/header.css'
import {Link} from 'react-router-dom'
function Header(){
    return(
        <>
             <header>
                <nav id="header_container">
                    <h4>Hotline: 0933.782.768</h4>
                    <ul id="header_container_list">
                        <li className="header_container_item">
                            <Link to="/Signup">Đăng kí</Link>
                        </li>
                        <li className="header_container_item">
                            <Link to="/">Đăng nhập</Link>
                        </li>
                        <li className="header_container_item">
                            <Link to="/">Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
                <div id='banner'><img src="../../../images/logo.webp" alt="" /></div>
            </header>
        </>
    )
}
export default Header
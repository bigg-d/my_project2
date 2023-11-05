import '../../../style/Home/section/footer.css'
function Footer(){
    return(
        <footer id='footer_container'>
        <div id='footer_container_content'>
            <ul className="footer_container_list">
                <h4 className='footer_container_title'>FOLLOW US</h4>
                <li className="footer_container_item"></li>
            </ul>
            <ul className="footer_container_list">
                <h4 className='footer_container_title'>ABOUT US</h4>
                <li className="footer_container_item">Giới thiệu</li>
                <li className="footer_container_item">Hướng dẫn mua hàng</li>
                <li className="footer_container_item">Chính sách đổi trả hàng</li>
                <li className="footer_container_item">Chính sách giao - nhận</li>
                <li className="footer_container_item">Điều khoản sử dụng</li>
                <li className="footer_container_item">Bảo mật thông tin khách hàng</li>
            </ul>
            <ul className="footer_container_list">
                <h4 className='footer_container_title'>CONTACT US</h4>
                <li className="footer_container_item">Store I: 445 Sư Vạn Hạnh, P.12, Q.10.</li>
                <li className="footer_container_item">Store II: 48 Trần Quang Diệu, P.14, Q.3, TP.HCM</li>
                <li className="footer_container_item">Store III: 463 Quang Trung, P.10, Q.Gò Vấp, TP.HCM</li>
                <li className="footer_container_item">Store IV: G-Town 1, 350 Điện Biên Phủ, P.17, Q.Bình Thạnh, TP.HCM</li>
                <li className="footer_container_item">Store V: G-Town 2, 136 Nguyễn Hồng Đào, P.14, Q.Tân Bình, TP.HCM</li>
                <li className="footer_container_item">Store VI: TNP 26LTT - 26 Lý Tự Trọng, P.Bến Nghé, Q.1, TP.HCM</li>
            </ul>
        </div>
        <p id='copyright'>Needs Of Wisdom® All Rights Reserved.</p>
        </footer>
    )
}
export default Footer
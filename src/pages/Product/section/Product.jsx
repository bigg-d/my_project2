import style from '../../../style/Product/product.module.css'
import { useState, useEffect, useContext } from 'react';
import CartContext from '../../../context/CartContext';
function Product(){
    const [products, setProducts] = useState([]);
    const {addToCart} = useContext(CartContext)
    useEffect(() =>{
        fetch('https://65406a4045bedb25bfc1e117.mockapi.io/api/vi/products_api/products')
        .then(response => {
        // Xử lý phản hồi từ API
            if (response) {
                return response.json(); // Chuyển đổi phản hồi thành đối tượng JSON
            }
            throw new Error('Có lỗi xảy ra khi gọi API.');
        })
        .then(data => {
            setProducts(data)
        })
        .catch(error => {
            console.error(error);
        });
    },[])
    
    
    return(
        <div id={style.product_container}>
            <ul id={style.product_container_nav}>
                <li className={style.product_container_nav_item}><a href="/">Trang chủ</a></li>
                <li className={style.product_container_nav_item}><a href="/">Tất cả sản phẩm</a></li>
            </ul>
            <div id={style.product_container_content}>
                <ul id={style.product_container_filter}>
                    <h4 id={style.product_container_filter_title}>DANH MỤC SẢN PHẨM</h4>
                    <li className={style.product_container_filter_item}>ALL ITEMS</li>
                    <li className={style.product_container_filter_item}>TEE</li>
                    <li className={style.product_container_filter_item}>BABY TEE</li>
                    <li className={style.product_container_filter_item}>BOTTOM</li>
                    <li className={style.product_container_filter_item}>JACKET</li>
                    <li className={style.product_container_filter_item}>HOODIE</li>
                    <li className={style.product_container_filter_item}>SWEATER</li>
                    <li className={style.product_container_filter_item}>CAP</li>
                </ul>
                <ul id={style.product_container_list}>
                    {products.map((product) => (
                        <li key={product.id} className={style.product_container_item}>
                            <div className={style.product_container_item_img}></div>
                            <h2 className={style.product_container_item_name}>{product.name}</h2>
                            <h4 className={style.product_container_item_price}>{product.price}.000đ</h4>
                            <div id={style.add_product_btn} onClick={()=>addToCart(product)}>Add to cart</div>
                        </li>
                        
                    ))}
                    
                </ul>
            </div>
        </div>
    )
}
export default Product
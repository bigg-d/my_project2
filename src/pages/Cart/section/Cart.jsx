import '../../../style/Cart/cart.css'
import CartItem from './CartItem';
import { useContext, useState, useEffect } from 'react'
import CartContext from '../../../context/CartContext';

function Cart(){
    const {cartContextItems} = useContext(CartContext)
    const [cartItems, setCartItems] = useState(cartContextItems)
    const [sumPrice,setSumPrice] = useState(0)
    
    const handleRemoveItem = (indexItem) =>{
        const updatedCartItems = cartItems.filter((item) => item.id !==  indexItem)
        setCartItems(updatedCartItems)
    }

     const getSumPrice = ()=>{
        var totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.totalPrice;
        });
        setSumPrice(totalPrice)
    }
    useEffect(() => getSumPrice(), [cartItems])
     // Khởi tạo sumPrice state để hiển thị ra tổng tiền tất cả sản phẩm
     

    return(
       <>
            <div id="cart_container">
                <h2 id='cart_container_title'>Giỏ hàng của bạn</h2>
                <table id='cart_container_table'>
                    <thead>
                        <tr className='cart_container_row'>
                            <th style={{width: '270px'}} >Ảnh sản phẩm</th>
                            <th style={{width: '260px'}}>Tên sản phẩm</th>
                            <th style={{width: '160px'}}>Đơn giá</th>
                            <th style={{width: '100px'}}>Số lượng</th>
                            <th style={{width: '210px'}}>Thành tiền</th>
                            <th style={{width: '100px'}}>Xóa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => {
                            return (
                                <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} onGetSumPrice={getSumPrice}/>
                            )
                        })}
                    </tbody>
                </table>
                <div id='cart_container_bottom'>
                    <button  id="cart_container_continue">TIẾP TỤC MUA HÀNG</button>
                    <div id="cart_container_total">
                        <table id='cart_container_total_price'>
                            <tbody>
                                <tr>
                                    <td>Tổng tiền thanh toán</td>
                                    <td id='cart_container_total_sum_price'>{sumPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button  id="cart_container_checkout">TIẾN HÀNH THANH TOÁN</button>
                    </div>
                </div>
            </div>
       </>
    )
}
export default Cart
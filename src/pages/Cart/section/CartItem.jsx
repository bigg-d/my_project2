import { useState } from "react";
function CartItem({item, onRemoveItem,onGetSumPrice}) {
    const [cartItemQuantity, setCartItemQuantity] = useState(1);
    let totalPrice = (cartItemQuantity * item.price);
    item.totalPrice = totalPrice;
    return (    
      
        <tr className='cart_container_row' key={item.id}>
            <td>
                <img style={{width: '100px', height: '100px'}} src={'../../../images/listImage/img1.jpg'} alt={'sai'} />
            </td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td style={{width: '100px'}}>
                <input id='cart_item_price' min={1} type="number" value={cartItemQuantity} 
                onChange={(e) => setCartItemQuantity(e.target.value)}  
                onClick={()=> onGetSumPrice()}
                />
            </td>
                                    
            <td id='cart_item_total_price'>{totalPrice}</td>
            <td><button  onClick={(e) => onRemoveItem(item.id)}>Xoa</button></td>
        </tr>
    );
}
export default CartItem
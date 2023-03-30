import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

function Cart(){
const cart = useSelector ((state) => state.cart )
    return (
        <div className="container-cart">
            <h3>Shopping Cart</h3>
            { cart.cartItems.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is currently empty </p>
                    <div className="start-shopping">
                       <Link to="/">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                           </svg>
                           <span>Start Shopping </span>
                       </Link>
                    </div>
                </div>

            ) : (
                <div>
                    <div className="titles">
                    <h3 className="product-title">product</h3>
                        <h3 className="price">price</h3>
                    </div>
                </div>
            )}
        </div>
    )
}
export default Cart;

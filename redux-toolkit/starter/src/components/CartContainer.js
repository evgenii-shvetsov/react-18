import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useEffect } from "react";


const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const cleaCartFunc = ()=>{
    dispatch(clearCart())
  }
  
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total.toFixed(2)}</span>
            </h4>
          </div>
          <button onClick={cleaCartFunc} className="btn clear-btn">
            clear cart
          </button>
        </footer>
      </header>
    </section>
  );
};
export default CartContainer;

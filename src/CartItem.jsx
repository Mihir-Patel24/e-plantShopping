import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem, updateQuantity } from "./CartSlice.jsx";
import Navbar from "./components/Navbar.jsx";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const total = cartItems.reduce((sum, item) => sum + Number(item.cost ?? item.price) * item.quantity, 0);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const handleIncrement = (item) => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = (item) => {
    if (item.quantity <= 1) dispatch(removeItem(item.name));
    else dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = (item) => dispatch(removeItem(item.name));
  return (
    <>
      <Navbar />
      <main className="cart-page">
        <h1>Shopping Cart</h1>
        <p className="cart-count-heading">{itemCount} item(s) in your cart</p>
        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <Link className="button get-started-button" to="/plants">Continue Shopping</Link>
          </section>
        ) : (
          <div className="cart-container">
            <section className="cart-items">
              {cartItems.map((item) => {
                const cost = Number(item.cost ?? item.price);
                return (
                  <article className="cart-row" key={item.name}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-product-details">
                      <h2>{item.name}</h2>
                      <p>Unit price: ${cost.toFixed(2)}</p>
                      <p>Item total: <strong>${(cost * item.quantity).toFixed(2)}</strong></p>
                    </div>
                    <div className="cart-controls">
                      <div className="quantity-controls">
                        <button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                      </div>
                      <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                    </div>
                  </article>
                );
              })}
            </section>
            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <p>Total items: <strong>{itemCount}</strong></p>
              <p>Total amount: <strong>${total.toFixed(2)}</strong></p>
              <button className="get-started-button1" onClick={() => window.alert("Coming Soon!")}>Checkout</button>
              <Link className="button get-started-button" to="/plants">Continue Shopping</Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

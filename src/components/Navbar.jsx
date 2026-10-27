import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../CartSlice.jsx";
export default function Navbar() {
 const cartCount = useSelector(selectCartCount);
 return <header className="site-header"><Link className="brand" to="/">🌿 Paradise Nursery</Link>
  <nav className="main-nav" aria-label="Main navigation">
   <NavLink to="/">Home</NavLink><NavLink to="/plants">Plants</NavLink>
   <NavLink to="/cart">🛒 Cart <span className="cart-count">{cartCount}</span></NavLink>
  </nav>
 </header>;
}

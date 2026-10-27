import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice.jsx";
import { plantsArray } from "./data/plants.js";
import Navbar from "./components/Navbar.jsx";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const addedToCart = {};
  cartItems.forEach((item) => { addedToCart[item.name] = true; });
  const categories = [...new Set(plantsArray.map((plant) => plant.category))];
  return (
    <>
      <Navbar />
      <main className="product-list product-list-page">
        <section className="products-intro">
          <p className="eyebrow">GROW SOMETHING GOOD</p>
          <h1>Explore Our Plants</h1>
          <p>Find the perfect green companion for your home.</p>
          <span className="listing-cart-count">🛒 Cart items: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
        </section>
        {categories.map((category) => (
          <section className="plant-category" key={category}>
            <h2>{category}</h2>
            <div className="product-grid">
              {plantsArray.filter((plant) => plant.category === category).map((plant) => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p>{plant.description}</p>
                    <strong>${Number(plant.cost).toFixed(2)}</strong>
                    <button className="add-to-cart-button" disabled={!!addedToCart[plant.name]} onClick={() => dispatch(addItem(plant))}>
                      {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </>
  );
}

import {ProductCard} from "./components/ProductCard";
import { useState, useEffect } from "react"

function App() {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
            .finally(() => setLoading(false))
  }, [])

  return (
    <div className="product-grid">
      {loading && <div>Loading...</div>}
      {
        products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
    </div>
  );
}

export default App;
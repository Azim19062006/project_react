import {ProductCard} from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF894,1000_QL80_.jpg"
  },
  {
    id: 1,
    name: "Product 2",
    category: "Category 1",
    price: 500,
    img: "https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF894,1000_QL80_.jpg"
  }
]

function App() {
  return (
    <div>
      {
        products.map((product) => (
          <ProductCard data = {product}/>
        ))}
    </div>
  );
}

export default App;
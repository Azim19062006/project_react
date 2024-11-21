import "./index.css";

export function ProductCard(props) {
    const {image, category, title, price} = props.data;

    return (
        <div className = "product-card">
            <img width = "200" src = {image} />
            <div className="category">{category}</div>
            <h4 className="title">{title}</h4>
            <div className="price-and-button">
                <p className="price">${price}</p>
                <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    )
}
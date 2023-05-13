import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div>
      <img src={props.productImage} />
      <h2>{props.productTitle}</h2>
      <h3>{props.productPrice}</h3>
      <Link to={`/product/${props.productId}`}>
        <button>Show Details</button>
      </Link>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductCard;

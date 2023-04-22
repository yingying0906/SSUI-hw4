import { useContext } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "../productContext/productContext";
import { CartContext } from "../../CartPage/CartContext/CartContext";
import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	return (
		<div className="AddCartBtn">
			<Button
				disabled={!productState.canAddCart}
				onClick={(e) => {
					addToCart(productState);
				}}
			>
				Add To Cart
			</Button>
		</div>
	);
};

export default AddCartBtn;

import { useContext } from "react";
import { Button } from "reactstrap";

import { CartContext } from "../../../context/CartContext";
import { ProductContext } from "../../../context/ProductContext";

import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);

	return (
		<div className="redButton">
			<Button
				disabled={
					!productState.canAddCart ||
					productState.price === "" ||
					productState.price === null
				}
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

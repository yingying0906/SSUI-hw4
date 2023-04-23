import { useContext } from "react";
import { Button } from "reactstrap";

import { ProductContext } from "../../../context/productContext";
import { cartContext } from "../../../context/cartContext";

import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	const { addToCart } = useContext(cartContext);

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

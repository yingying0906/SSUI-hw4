import { useContext } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "../../../Context/productContext";
import { cartContext } from "../../../Context/cartContext";
import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	const { addToCart } = useContext(cartContext);

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

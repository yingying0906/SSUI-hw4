import { useContext } from "react";
import { Button } from "reactstrap";
import { ProductContext } from "./ProductPage";

import "./AddCartBtn.css";

const AddCartBtn = () => {
	const { productState } = useContext(ProductContext);
	return (
		<div className="AddCartBtn">
			<Button disabled={!productState.canAddCart}>Add To Cart</Button>
		</div>
	);
};

export default AddCartBtn;

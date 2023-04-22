import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./CartPart.css";

import CartItem from "./component/CartItem";

const CartRender = (prop) => {
	const { cartState } = useContext(CartContext);
	const CartArr = cartState.map((item, index) => {
		return <CartItem data={item} idx={index} />;
	});
	return CartArr;
};

const CartPart = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="Cart-Container">
			{totalQuantity ? <CartRender /> : <h3>Your Cart is Empty</h3>}
		</div>
	);
};

export default CartPart;

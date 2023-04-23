import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import CartItem from "./component/CartItem";

import "./MyCart.css";

const CartRender = (prop) => {
	const { cartState } = useContext(CartContext);
	const CartArr = cartState.slice(0).map((item, index) => {
		return <CartItem key={index} data={item} idx={index} />;
	});
	return CartArr.reverse();
};

const MyCart = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="Cart-Container">
			{totalQuantity ? <CartRender /> : <h3>Your Cart is Empty</h3>}
		</div>
	);
};

export default MyCart;

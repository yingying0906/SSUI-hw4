import { useContext } from "react";
import { cartContext } from "../../../context/cartContext";
import "./MyCart.css";

import CartItem from "./component/CartItem";

const CartRender = (prop) => {
	const { cartState } = useContext(cartContext);
	const CartArr = cartState.slice(0).map((item, index) => {
		return <CartItem key={index} data={item} idx={index} />;
	});
	return CartArr.reverse();
};

const MyCart = () => {
	const { totalQuantity } = useContext(cartContext);

	return (
		<div className="Cart-Container">
			{totalQuantity ? <CartRender /> : <h3>Your Cart is Empty</h3>}
		</div>
	);
};

export default MyCart;

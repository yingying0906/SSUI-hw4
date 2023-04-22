import { useContext } from "react";
import { CartContext } from "./CartContext/CartContext";

import "./CartPage.css";
import CartPart from "./CartPart/CartPart";
import OrderSummary from "./OrderSummary/OrderSummary";

const CartPage = () => {
	const { totalQuantity } = useContext(CartContext);

	return (
		<div className="Cart-Page">
			<h1 className="Cart-title">My Cart ({totalQuantity})</h1>

			<div className="Cart-Content">
				<CartPart />
				<OrderSummary />
			</div>
		</div>
	);
};

export default CartPage;

import { useContext } from "react";
import { cartContext } from "../../Context/cartContext";

import "./CartPage.css";
import MyCart from "./MyCart/MyCart";
import OrderSummary from "./OrderSummary/OrderSummary";

const CartPage = () => {
	const { totalQuantity } = useContext(cartContext);

	return (
		<div className="Cart-Page">
			<h1 className="Cart-title">My Cart ({totalQuantity})</h1>

			<div className="Cart-Content">
				<MyCart />
				<OrderSummary />
			</div>
		</div>
	);
};

export default CartPage;

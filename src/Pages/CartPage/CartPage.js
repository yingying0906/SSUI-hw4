import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import MyCart from "./MyCart/MyCart";
import OrderSummary from "./OrderSummary/OrderSummary";

import { Button } from "reactstrap";
import "./CartPage.css";

const CartPage = () => {
	const { totalQuantity, removeAll } = useContext(cartContext);

	return (
		<div className="Cart-Page">
			<div className="redButton">
				<h1 className="Cart-title">
					My Cart ({totalQuantity})
					<Button
						className="remove-all"
						onClick={removeAll}
						disabled={totalQuantity === 0}
					>
						Remove All
					</Button>
				</h1>
			</div>
			<div className="Cart-Content">
				<MyCart />
				<OrderSummary />
			</div>
		</div>
	);
};

export default CartPage;

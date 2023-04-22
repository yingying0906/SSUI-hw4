import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./OrderSummary.css";

const OrderSummary = () => {
	const { cartState, totalPrice } = useContext(CartContext);

	const SubTotal = () => {
		return (
			<div className="orderSumSeperate">
				<h6>Subtotal:</h6>
				<h6>${totalPrice.toFixed(2)}</h6>
			</div>
		);
	};

	const EstShipping = () => {
		return (
			<div className="orderSumSeperate">
				<h6>Est.Shipping</h6>
				<h6>{cartState.length ? "$6.95" : "$0.00"}</h6>
			</div>
		);
	};

	const Total = (props) => {
		var shipping = props.total ? 6.95 : 0;
		return (
			<div className="orderSumSeperate">
				<h6>Subtotal</h6>

				<h6
					style={{
						fontSize: "1.3em",
						borderTop: "solid 2px #ac2432",
					}}
				>
					${(props.total + shipping).toFixed(2)}
				</h6>
			</div>
		);
	};

	return (
		<div className="Order-Container">
			<h4>Order Summary</h4>
			<div>
				<SubTotal total={totalPrice} />
				<EstShipping state={cartState} />
				<Total total={totalPrice} />
			</div>
		</div>
	);
};
export default OrderSummary;

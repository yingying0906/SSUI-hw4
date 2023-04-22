import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../context/cartContext";

import CartLogo from "../../../assets/images/cart.png";
import "./CartBtn.css";
const CartBtn = () => {
	const { totalQuantity } = useContext(cartContext);
	return (
		<Link to="/cart" id="cart">
			<img src={CartLogo} alt="cartlogo" height={"50px"} />
			<span> {totalQuantity} </span>
		</Link>
	);
};

export default CartBtn;

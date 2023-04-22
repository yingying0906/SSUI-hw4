import "./CartBtn.css";
import { Link } from "react-router-dom";
import CartLogo from "../../../assets/images/cart.png";
import { useContext } from "react";
import { CartContext } from "../../../Pages/CartPage/CartContext/CartContext";

const CartBtn = () => {
	const { totalQuantity } = useContext(CartContext);
	return (
		<Link to="/cart" id="cart">
			<img src={CartLogo} alt="cartlogo" height={"50px"} />
			<span> {totalQuantity} </span>
		</Link>
	);
};

export default CartBtn;

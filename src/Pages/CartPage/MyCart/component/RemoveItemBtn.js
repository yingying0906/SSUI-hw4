import { Button } from "reactstrap";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

import "./RemoveItemBtn.css";

const RemoveItemBtn = (props) => {
	const { removeFromCart } = useContext(CartContext);
	return (
		<div className="redButton">
			<Button
				onClick={() => {
					removeFromCart(props.CartIndex);
				}}
			>
				Remove
			</Button>
		</div>
	);
};

export default RemoveItemBtn;

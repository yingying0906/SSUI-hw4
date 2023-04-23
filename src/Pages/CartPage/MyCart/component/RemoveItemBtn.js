import { Button } from "reactstrap";
import { useContext } from "react";
import { cartContext } from "../../../../context/cartContext";

import "./RemoveItemBtn.css";

const RemoveItemBtn = (props) => {
	const { removeFromCart } = useContext(cartContext);
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

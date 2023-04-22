import { Button } from "reactstrap";
import "./RemoveItemBtn.css";
import { useContext } from "react";
import { cartContext } from "../../../../Context/cartContext";

const RemoveItemBtn = (props) => {
	const { removeFromCart } = useContext(cartContext);
	return (
		<div>
			<Button
				className="RemoveBtn"
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

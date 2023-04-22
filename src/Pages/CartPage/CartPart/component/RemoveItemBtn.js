import { Button } from "reactstrap";
import "./RemoveItemBtn.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const RemoveItemBtn = (props) => {
	const { removeFromCart } = useContext(CartContext);
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

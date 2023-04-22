import "./CartItem.css";
import QuantityDrop from "./QuantityDrop";
import shirtArr from "../../../../shared/shirts";
import RemoveItemBtn from "./RemoveItemBtn";

const CartItem = (props) => {
	const { name, color, size, quantity, price, id } = props.data;

	const imgSrc = shirtArr[id].colors[color].front;

	return (
		<div className="CartItem-Container">
			<h2>{name}</h2>
			<div className="Cart-RightDiv">
				<img src={imgSrc} alt="" />
				<div>
					<div>
						<span>Quantity: </span>
						<QuantityDrop q={quantity} CartIndex={props.idx} />
					</div>
					<div>
						<span>Color: </span>
						<span>{color}</span>
					</div>
					<div>
						<span>Size: </span>
						<span>{size}</span>
					</div>
					<div>
						<span>Price(each): </span>
						<span>{price}</span>
					</div>

					<RemoveItemBtn CartIndex={props.idx} />
				</div>
			</div>
		</div>
	);
};

export default CartItem;

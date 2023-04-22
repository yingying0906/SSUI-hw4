import { useState, useContext } from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./QuantityDrop.css";
import { cartContext } from "../../../../context/cartContext";

const QuantityDrop = ({ CartIndex, q }) => {
	const {
		cartState,
		setCartState,
		totalQuantity,
		setTotalQuantity,
		totalPrice,
		setTotalPrice,
	} = useContext(cartContext);

	/* change quantity context*/
	const changeCartQuan = (num) => {
		const updatedCartItems = cartState.map((item, index) => {
			if (index === CartIndex) {
				return { ...item, quantity: item.quantity + (num - q) };
			} else {
				return item;
			}
		});

		setCartState(updatedCartItems);
		setTotalQuantity(totalQuantity + (num - q));

		setTotalPrice(
			totalPrice +
				(num - q) *
					parseFloat(cartState[CartIndex].price.replace("$", ""))
		);
	};

	/* render quantity choices*/
	const num = [];
	for (let i = 1; i <= 20; i++) {
		num.push(
			<DropdownItem
				key={i}
				id={i}
				style={{ maxWidth: "150px" }}
				onClick={(e) => changeCartQuan(e.target.id)}
			>
				{i}
			</DropdownItem>
		);
	}

	/* dropdown */
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	return (
		<span>
			<Dropdown
				direction="up"
				isOpen={dropdownOpen}
				toggle={toggle}
				className="customQuanDrop"
			>
				<DropdownToggle caret>{q}</DropdownToggle>
				<DropdownMenu className="QuantityDrop">{num}</DropdownMenu>
			</Dropdown>
		</span>
	);
};

export default QuantityDrop;

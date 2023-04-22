import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./QuantityList.css";

import { useContext } from "react";
import { ProductContext } from "../../../Context/productContext";
const DropMenu = ({ handleQuanItem }) => {
	const num = [];
	for (let i = 1; i <= 20; i++) {
		num.push(
			<DropdownItem
				key={i}
				id={i}
				onClick={(e) => handleQuanItem(e.target.id)}
				style={{
					maxWidth: "150px",
				}}
			>
				{i}
			</DropdownItem>
		);
	}

	return num;
};
const QuantityList = () => {
	const { productState, setProductState } = useContext(ProductContext);

	const toggleQuan = () => {
		setProductState((prevState) => ({
			...prevState,
			openQuan: !prevState.openQuan,
		}));
	};
	const handleQuanItem = (num) => {
		setProductState({ ...productState, selQty: parseInt(num) });
	};

	return (
		<div className="customQuanDrop">
			Quantity:
			<Dropdown
				direction="up"
				isOpen={productState.openQuan}
				toggle={toggleQuan}
			>
				<DropdownToggle caret>{productState.selQty}</DropdownToggle>
				<DropdownMenu className="QuantityDrop">
					{DropMenu({ handleQuanItem })}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default QuantityList;

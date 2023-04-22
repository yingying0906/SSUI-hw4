import React from "react";
import {
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./SizeList.css";
import { useContext } from "react";
import { ProductContext } from "../../../context/productContext";

const allSize = [
	"Women's XS",
	"Women's S",
	"Women's M",
	"Women's L",
	"Women's XL",
	"Women's 2XL",
	"Men's XS",
	"Men's S",
	"Men's M",
	"Men's L",
	"Men's XL",
	"Men's 2XL",
];

const DropMenu = ({ handleSizeItem }) => {
	return allSize.map((s) => (
		<DropdownItem
			key={s}
			id={s}
			onClick={(e) => handleSizeItem(e.target.id)}
			style={{
				maxWidth: "150px",
			}}
		>
			{s}
		</DropdownItem>
	));
};

const SizeList = () => {
	const { productState, setProductState } = useContext(ProductContext);
	const toggleSize = () => {
		setProductState((prevState) => ({
			...prevState,
			openSize: !prevState.openSize,
		}));
	};

	const handleSizeItem = (num) => {
		setProductState({
			...productState,
			selSize: num,
			canAddCart: true,
		});
	};

	return (
		<div className="customSizeDrop">
			Size:
			<Dropdown
				direction="up"
				isOpen={productState.openSize}
				toggle={toggleSize}
			>
				<DropdownToggle caret>{productState.selSize}</DropdownToggle>
				<DropdownMenu className="QuantityDrop">
					{DropMenu({ handleSizeItem })}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default SizeList;

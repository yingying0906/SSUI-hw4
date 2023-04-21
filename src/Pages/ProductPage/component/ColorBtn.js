import React from "react";
import { Button } from "reactstrap";

import "./ColorBtn.css";

import { useContext } from "react";
import { ProductContext } from "../ProductPage";

const ColorBtn = ({ target }) => {
	const { productState, setProductState } = useContext(ProductContext);
	const handleColorBtn = (color) => {
		setProductState({ ...productState, color: color });
	};

	const btn = [];
	Object.keys(target.colors).map((clr) =>
		btn.push(
			<Button
				id={clr}
				className="colorBtn"
				style={{
					backgroundColor: clr,
					color: "black",
				}}
				onClick={(e) => {
					handleColorBtn(e.target.id);
				}}
			>
				{clr}
			</Button>
		)
	);
	return (
		<div>
			Color:
			{btn}
		</div>
	);
};

export default ColorBtn;

import React from "react";
import { Button } from "reactstrap";
import "./SideBtn.css";

import { useContext } from "react";
import { ProductContext } from "../ProductPage";

const SideBtn = () => {
	const { productState, setProductState } = useContext(ProductContext);
	const handleSideBtn = (side) => {
		setProductState({ ...productState, side: side });
	};

	return (
		<div>
			Side:
			<Button
				id="front"
				className="sideBtn"
				onClick={(e) => handleSideBtn(e.target.id)}
			>
				Front
			</Button>
			<Button
				id="back"
				className="sideBtn"
				onClick={(e) => handleSideBtn(e.target.id)}
			>
				Back
			</Button>
		</div>
	);
};

export default SideBtn;

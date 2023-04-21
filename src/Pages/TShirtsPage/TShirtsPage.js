import React from "react";
import BuildCard from "./component/BuildCard";
import shirtArr from "../../shared/shirts";
import "./TShirtsPage.css";

const getColorLink = (obj) => {
	let colorName = Object.keys(obj.colors)[0];
	let colorlink = obj.colors[colorName].front;
	return colorlink;
};
const getColorNum = (obj) => {
	return Object.keys(obj.colors).length;
};

const tShirtsPage = () => {
	return (
		<div className="TPage">
			<h2>Our T-Shirts</h2>
			<div className="Tflex">
				{shirtArr.map((shirt) => (
					<BuildCard
						name={shirt.name}
						desc={shirt.description}
						price={shirt.price}
						colors={getColorLink(shirt)}
						colorNum={getColorNum(shirt)}
					/>
				))}
			</div>
		</div>
	);
};

export default tShirtsPage;

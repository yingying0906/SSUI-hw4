import "./ProductPage.css";
import { useState, createContext, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "reactstrap";

import shirtArr from "../../shared/shirts";
/* component */
import SizeList from "./component/SizeList";
import QuantityList from "./component/QuantityList";
import SideBtn from "./component/SideBtn";
import ColorBtn from "./component/ColorBtn";
import AddCartBtn from "./AddCartBtn";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [productState, setProductState] = useState({
		side: null,
		color: null,
		openQuan: false,
		selQty: "1",
		openSize: false,
		selSize: "Size",
		canAddCart: false,
	});

	return (
		<ProductContext.Provider value={{ productState, setProductState }}>
			{children}
		</ProductContext.Provider>
	);
};

const ProductPage = () => {
	/* parameters */
	const { name } = useParams();
	const target = shirtArr.find((p) => p.name === name);
	const firstClr = Object.keys(target.colors)[0];
	const firstSide = Object.keys(target.colors[firstClr])[0];
	const { productState, setProductState } = useContext(ProductContext);
	//setProductState({ ...productState, color: firstClr });

	useEffect(() => {
		setProductState((prevState) => ({
			...prevState,
			color: firstClr,
			side: firstSide,
		}));
	}, [firstClr, firstSide, setProductState]);

	/* return element */
	return (
		<div className="ProductPage">
			<h1>{target.name}</h1>
			<div className="detailContainer">
				{productState.color &&
				productState.side &&
				target.colors[productState.color][productState.side] ? (
					<img
						src={
							target.colors[productState.color][productState.side]
						}
						alt=""
					/>
				) : (
					<img src={target.default.front} alt="" />
				)}
				<div className="rightDiv">
					<h2>{target.price}</h2>
					<p>{target.description}</p>

					<SideBtn />
					<ColorBtn target={target} />
					<QuantityList />
					<SizeList />
					<AddCartBtn />
				</div>
			</div>
		</div>
	);
};

export default ProductPage;

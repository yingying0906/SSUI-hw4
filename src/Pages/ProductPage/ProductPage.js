import "./ProductPage.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import shirtArr from "../../shared/shirts";

/* components */
import SizeList from "./component/SizeList";
import QuantityList from "./component/QuantityList";
import SideBtn from "./component/SideBtn";
import ColorBtn from "./component/ColorBtn";
import AddCartBtn from "./component/AddCartBtn";

import { ProductContext } from "../../context/productContext";

const ProductPage = () => {
	const { name, id } = useParams();
	const target = shirtArr[id];
	const firstClr = Object.keys(target.colors)[0];
	const firstSide = Object.keys(target.colors[firstClr])[0];

	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		setProductState((prevState) => ({
			...prevState,
			side: firstSide,
			color: firstClr,
			name: name,
			selQty: 1,
			selSize: "Size",
			canAddCart: false,
			price: target.price,
			id: id,
		}));

		return () => {
			setProductState((prevState) => ({
				...prevState,
				side: null,
				color: null,
				name: null,
				selQty: null,
				selSize: null,
				canAddCart: null,
				price: null,
				id: null,
			}));
		};
	}, [firstClr, firstSide, name, setProductState, target.price, id]);

	return (
		<div className="ProductPage">
			{productState.color !== null &&
			productState.side !== null &&
			productState.name !== null &&
			productState.selQty !== null &&
			productState.selSize !== null ? (
				<div>
					<h1>{target.name}</h1>
					<div className="ProductPage-Container">
						<img
							src={
								target.colors[productState.color][
									productState.side
								]
							}
							alt=""
						/>
						<div className="ProductPage-rightDiv">
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
			) : (
				<div>Loading</div>
			)}
		</div>
	);
};

export default ProductPage;

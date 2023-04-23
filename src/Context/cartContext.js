import { createContext, useState } from "react";
import { Alert } from "reactstrap";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (state) => {
		const newCartItem = {
			name: state.name,
			color: state.color,
			size: state.selSize,
			quantity: state.selQty,
			price: state.price,
			id: state.id,
		};

		setCartState([...cartState, newCartItem]);
		setTotalQuantity(totalQuantity + state.selQty);
		setTotalPrice(
			totalPrice + state.selQty * parseFloat(state.price.replace("$", ""))
		);
	};

	const removeFromCart = (delIndex) => {
		const updatedCartItems = [...cartState];
		const removedItem = updatedCartItems.splice(delIndex, 1)[0];

		setTotalQuantity(totalQuantity - removedItem.quantity);
		setTotalPrice(
			totalPrice -
				removedItem.quantity *
					parseFloat(removedItem.price.replace("$", ""))
		);

		setCartState(updatedCartItems);
	};

	const removeAll = () => {
		var isAgree = window.confirm(
			`Are you sure you want to remove all ${totalQuantity} items?`
		);

		if (isAgree) {
			setCartState([]);
			setTotalQuantity(0);
			setTotalPrice(0);
		}
	};

	const contextValue = {
		cartState,
		setCartState,
		addToCart,
		removeFromCart,
		removeAll,
		totalQuantity,
		setTotalQuantity,
		totalPrice,
		setTotalPrice,
	};

	return (
		<cartContext.Provider value={contextValue}>
			{children}
		</cartContext.Provider>
	);
};

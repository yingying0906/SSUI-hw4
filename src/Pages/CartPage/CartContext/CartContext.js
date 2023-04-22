import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cartState, setCartState] = useState([]);
	const [totalQuantity, setTotalQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const addToCart = (state) => {
		const existingCartItem = cartState.find(
			(item) =>
				item.name === state.name &&
				item.color === state.color &&
				item.size === state.selSize &&
				item.price === state.price &&
				item.id === state.id
		);

		if (existingCartItem) {
			const updatedCartItems = cartState.map((item) => {
				if (
					item.name === state.name &&
					item.color === state.color &&
					item.size === state.selSize &&
					item.price === state.price &&
					item.id === state.id
				) {
					return {
						...item,
						quantity: item.quantity + state.selQty,
					};
				} else {
					return item;
				}
			});
			setCartState(updatedCartItems);
		} else {
			const newCartItem = {
				name: state.name,
				color: state.color,
				size: state.selSize,
				quantity: state.selQty,
				price: state.price,
				id: state.id,
			};
			setCartState([...cartState, newCartItem]);
		}

		/* Quantity */
		setTotalQuantity(totalQuantity + state.selQty);

		/* Total price */
		setTotalPrice(
			totalPrice + state.selQty * parseFloat(state.price.replace("$", ""))
		);
	};
	const removeFromCart = (delIndex) => {
		const updatedCartItems = [...cartState]; // create a copy of the current cart state array
		const removedItem = updatedCartItems.splice(delIndex, 1)[0]; // remove the item at the specified index and store it in a variable

		// update the total quantity and price based on the removed item

		console.log(removedItem);
		setTotalQuantity(totalQuantity - removedItem.quantity);
		setTotalPrice(
			totalPrice -
				removedItem.quantity *
					parseFloat(removedItem.price.replace("$", ""))
		);

		setCartState(updatedCartItems); // set the cart state to the updated array
	};

	const contextValue = {
		cartState,
		setCartState,
		addToCart,
		removeFromCart,
		totalQuantity,
		setTotalQuantity,
		totalPrice,
		setTotalPrice,
	};
	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
};

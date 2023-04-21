import "./App.css";
import { Route, Routes } from "react-router-dom";

import HeadBar from "./containers/HeadBar/HeadBar";
import Navbar from "./containers/NavBar/NavBar";

import HomePage from "./containers/HomePage/HomePage";
import TShirtsPage from "./containers/TShirtsPage/TShirtsPage";
import CartPage from "./containers/CartPage/CartPage";
import NotFound from "./containers/NotFound/NotFound";
import Footer from "./containers/Footer/Footer";
import ProductPage from "./containers/ProductPage/ProductPage";

function App() {
	return (
		<div>
			<HeadBar />
			<Navbar />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/t-shirts" element={<TShirtsPage />} />
				<Route path="/cart" element={<CartPage />} />
				<Route path="/not-found" element={<NotFound />} />
				<Route path="/product/:name" element={<ProductPage />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";

import HeadBar from "./containers/HeadBar/HeadBar";
import Navbar from "./containers/NavBar/NavBar";
import Footer from "./containers/Footer/Footer";

import HomePage from "./Pages/HomePage/HomePage";
import TShirtsPage from "./Pages/TShirtsPage/TShirtsPage";
import CartPage from "./Pages/CartPage/CartPage";
import NotFound from "./Pages/NotFound/NotFound";
import ProductPage from "./Pages/ProductPage/ProductPage";

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
				<Route path="/product/:name/:id" element={<ProductPage />} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

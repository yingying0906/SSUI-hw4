import { Link } from "react-router-dom";
import { Nav } from "reactstrap";

import Logo from "../../assets/images/logo.png";
import CartLogo from "../../assets/images/cart.png";

import "./HeadBar.css";

const HeadBar = () => {
	return (
		<Nav className="header">
			<Link to="/">
				<img src={Logo} alt="logo" height="100px" />
			</Link>
			<h1>Scotty Shirts U Illustrate (SSUI)</h1>
			<Link to="/cart" id="cart">
				<img src={CartLogo} alt="cartlogo" height={"50px"} />
				<span> 0 </span>
			</Link>
		</Nav>
	);
};

export default HeadBar;

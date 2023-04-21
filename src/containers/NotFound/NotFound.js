import "./NotFound.css";
import dog from "../../assets/images/scotty.png";
const NotFound = () => {
	return (
		<div className="notFound">
			<img src={dog} alt="" />
			<h3>
				Oops, this page doesn't exist yet... how about a shirt from the
				last page?
			</h3>
		</div>
	);
};

export default NotFound;

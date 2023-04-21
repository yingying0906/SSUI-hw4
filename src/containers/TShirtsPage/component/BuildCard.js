import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
	CardLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./BuildCard.css";

const BuildCard = (props) => {
	return (
		<Card className="card">
			<Link to={`/product/${props.name}`}>
				<CardImg
					top
					width="100%"
					src={props.colors}
					alt="Card image cap"
				/>
			</Link>

			<CardBody>
				<CardTitle tag="h4">{props.name}</CardTitle>
				<CardSubtitle tag="h6" className="mb-2 text-muted">
					Available in {props.colorNum} colors
				</CardSubtitle>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<Link to={`/product/${props.name}`}>
						<Button>See Page</Button>
					</Link>
				</div>
			</CardBody>
		</Card>
	);
};

export default BuildCard;

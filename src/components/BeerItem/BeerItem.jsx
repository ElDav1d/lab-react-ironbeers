import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./BeerItem.css";

function BeerItem({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <Col as="li" xs={12} md={4} lg={3}>
      <Card as="article" className="beer-item">
        <NavLink to={`/beers/${name}/${_id}`}>
          <Card.Img
            bsPrefix="beer-item-image"
            variant="top"
            src={image_url}
            alt={`A pic of ${name}`}
          />
          <Card.Body>
            <Card.Title as="h3">{name}</Card.Title>
            <Card.Title as="h4">{tagline}</Card.Title>
            <Card.Text>Created by: {contributed_by}</Card.Text>
          </Card.Body>
        </NavLink>
      </Card>
    </Col>
  );
}

export default BeerItem;

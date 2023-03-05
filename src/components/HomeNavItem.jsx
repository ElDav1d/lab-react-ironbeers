import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function HomeNavItem({ path, title, description, image }) {
  return (
    <Col as="section" xs={12} md={4}>
      <Card>
        <NavLink to={path}>
          <Card.Img variant="top" src={image} alt={title} />
          <Card.Body>
            <Card.Title as="h2">{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </NavLink>
      </Card>
    </Col>
  );
}

export default HomeNavItem;

import { NavLink } from "react-router-dom";
import beer from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Home() {
  return (
    <Container as="main" fluid="sm" className="home-container">
      <Row as="article">
        <Col as="section" xs={12} md={4}>
          <Card>
            <NavLink to={"/beers"}>
              <Card.Img variant="top" src={beer} alt="All Beers" />
              <Card.Body>
                <Card.Title as="h2">All Beers</Card.Title>
                <Card.Text>
                  Lorem fistrum tiene musho peligro apetecan benemeritaar ese
                  que llega sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar
                  tiene musho peligro diodenoo pecador va usté muy cargadoo. A
                  peich a wan caballo blanco caballo negroorl benemeritaar ese
                  hombree benemeritaar condemor al ataquerl ahorarr pupita va
                  usté muy cargadoo.
                </Card.Text>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>
        <Col as="section" xs={12} md={4}>
          <Card>
            <NavLink to={"/random-beers"}>
              <Card.Img variant="top" src={randomBeer} alt="Random Beer" />
              <Card.Body>
                <Card.Title as="h2">Random Beer</Card.Title>
                <Card.Text>
                  Lorem fistrum tiene musho peligro apetecan benemeritaar ese
                  que llega sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar
                  tiene musho peligro diodenoo pecador va usté muy cargadoo. A
                  peich a wan caballo blanco caballo negroorl benemeritaar ese
                  hombree benemeritaar condemor al ataquerl ahorarr pupita va
                  usté muy cargadoo.
                </Card.Text>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>
        <Col as="section" xs={12} md={4}>
          <Card>
            <NavLink to={"/new-beer"}>
              <Card.Img variant="top" src={newBeer} alt="New Beer" />
              <Card.Body>
                <Card.Title as="h2">New Beer</Card.Title>
                <Card.Text>
                  Lorem fistrum tiene musho peligro apetecan benemeritaar ese
                  que llega sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar
                  tiene musho peligro diodenoo pecador va usté muy cargadoo. A
                  peich a wan caballo blanco caballo negroorl benemeritaar ese
                  hombree benemeritaar condemor al ataquerl ahorarr pupita va
                  usté muy cargadoo.
                </Card.Text>
              </Card.Body>
            </NavLink>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

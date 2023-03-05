import Row from "react-bootstrap/Row";
import BeerItem from "./BeerItem/BeerItem";

function BeerList({ beers }) {
  return (
    <Row as="ul">
      {beers.map((beer) => (
        <BeerItem key={beer._id} {...beer} />
      ))}
    </Row>
  );
}

export default BeerList;

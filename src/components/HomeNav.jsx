import Row from "react-bootstrap/Row";
import { HOME_NAV_ITEMS } from "../constants";
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";
import HomeNavItem from "./HomeNavItem";

function HomeNav() {
  const images = [beer, newBeer, randomBeer];

  return (
    <Row as="article">
      {HOME_NAV_ITEMS.map(({ path, title, description }, index) => (
        <HomeNavItem
          key={index}
          path={path}
          title={title}
          description={description}
          image={images[index]}
        />
      ))}
    </Row>
  );
}

export default HomeNav;

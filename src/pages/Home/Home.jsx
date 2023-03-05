import "./Home.css";
import Container from "react-bootstrap/Container";

import HomeNav from "../../components/HomeNav";

function Home() {
  return (
    <Container as="main" fluid="sm" className="home-container">
      <HomeNav />
    </Container>
  );
}

export default Home;

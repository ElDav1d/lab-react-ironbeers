import { NavLink } from "react-router-dom";
import beer from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <>
      <NavLink to={"/beers"}>
        <img src={beer} alt="All Beers" />
        <h2>All Beers</h2>
        <p>
          Lorem fistrum tiene musho peligro apetecan benemeritaar ese que llega
          sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar tiene musho peligro
          diodenoo pecador va usté muy cargadoo. A peich a wan caballo blanco
          caballo negroorl benemeritaar ese hombree benemeritaar condemor al
          ataquerl ahorarr pupita va usté muy cargadoo.
        </p>
      </NavLink>
      <NavLink to={"/random-beers"}>
        <img src={randomBeer} alt="Random Beer" />
        <h2>Random Beer</h2>
        <p>
          Lorem fistrum tiene musho peligro apetecan benemeritaar ese que llega
          sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar tiene musho peligro
          diodenoo pecador va usté muy cargadoo. A peich a wan caballo blanco
          caballo negroorl benemeritaar ese hombree benemeritaar condemor al
          ataquerl ahorarr pupita va usté muy cargadoo.
        </p>
      </NavLink>
      <NavLink to={"/new-beers"}>
        <img src={newBeer} alt="New Beer" />
        <h2>New Beer</h2>
        <p>
          Lorem fistrum tiene musho peligro apetecan benemeritaar ese que llega
          sexuarl. Sexuarl al ataquerl mamaar a wan. Mamaar tiene musho peligro
          diodenoo pecador va usté muy cargadoo. A peich a wan caballo blanco
          caballo negroorl benemeritaar ese hombree benemeritaar condemor al
          ataquerl ahorarr pupita va usté muy cargadoo.
        </p>
      </NavLink>
    </>
  );
}

export default Home;

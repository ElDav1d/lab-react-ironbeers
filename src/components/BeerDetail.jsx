import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BeerDetail() {
  const { beerName, beerId } = useParams();
  const [beerData, setBeerData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;
    try {
      const response = await axios.get(url);

      setBeerData(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      redirect("/error");
    }
  };

  return (
    <>
      {!isFetching ? (
        <article>
          <header>
            <img
              src={beerData.image_url}
              alt={`A pic of ${beerData.name} beer`}
              height={100}
            />
            <div>
              <h1>{beerData.name}</h1>
              <h3>{beerData.attenuation_level}</h3>
              <h2>{beerData.tagline}</h2>
              <h4>{beerData.first_brewed}</h4>
            </div>
          </header>
          <section>
            <p>{beerData.description}</p>
          </section>
          <footer>
            <p>{beerData.contributed_by}</p>
          </footer>
        </article>
      ) : (
        <h2> ...loading {beerName} </h2>
      )}
    </>
  );
}

export default BeerDetail;

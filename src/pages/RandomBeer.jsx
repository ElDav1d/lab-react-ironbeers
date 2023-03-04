import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";
import Header from "../components/Header";

function RandomBeer() {
  const [beer, setBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = `https://ih-beers-api2.herokuapp.com/beers/random`;
    try {
      const response = await axios.get(url);

      setBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
      redirect("/error");
    }
  };

  return (
    <>
      <Header />
      <main>
        {isFetching ? <h2> ...loading</h2> : <BeerDetail {...beer} />}
      </main>
    </>
  );
}

export default RandomBeer;

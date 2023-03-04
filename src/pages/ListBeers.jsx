import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BeerList from "../components/BeerList";
import Header from "../components/Header";

function ListBeers() {
  const [beers, setBeers] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setBeers(response.data);
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
        {isFetching ? <h2> ...loading</h2> : <BeerList beers={beers} />}
      </main>
    </>
  );
}

export default ListBeers;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BeerList from "../components/BeerList";
import Header from "../components/Header";

function ListBeers() {
  const [beers, setBeers] = useState();
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
    } catch (error) {
      console.log(error);
      redirect("/error");
    }
  };

  return (
    <>
      <Header />
      <main>{beers ? <BeerList beers={beers} /> : <h2>...loading</h2>}</main>
    </>
  );
}

export default ListBeers;

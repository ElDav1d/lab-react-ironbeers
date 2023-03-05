import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm";
import BeerList from "../components/BeerList";
import Layout from "../components/Layout/Layout";

function ListBeers() {
  const [beers, setBeers] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, [searchInput]);

  const getData = async () => {
    const query = searchInput ? `/search?q=${searchInput}` : "";

    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers${query}`
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
      <Layout>
        <SearchForm setSearchInput={setSearchInput} />
        {isFetching ? <h2> ...loading</h2> : <BeerList beers={beers} />}
      </Layout>
    </>
  );
}

export default ListBeers;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import SearchForm from "../components/SearchForm/SearchForm";
import BeerList from "../components/BeerList";

function ListBeers() {
  const [beers, setBeers] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

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

  useDebounce(searchInput, 500, () => getData());

  return (
    <>
      <Header />
      <Layout>
        <SearchForm setSearchInput={setSearchInput} />
        {isFetching ? (
          <LoadSpinner hidddenText="Loading" />
        ) : (
          <BeerList beers={beers} />
        )}
      </Layout>
    </>
  );
}

export default ListBeers;

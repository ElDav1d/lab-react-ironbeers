import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import SearchForm from "../components/SearchForm/SearchForm";
import BeerList from "../components/BeerList";
import { SearchBeerContext } from "../context/searchBeer.context";
import {
  getAllBeersService,
  getFilteredBeersService,
} from "../services/beers.services";

function ListBeers() {
  const { searchContextInput } = useContext(SearchBeerContext);
  const [beers, setBeers] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  const getData = async () => {
    const query = searchContextInput ? `/search?q=${searchContextInput}` : "";

    try {
      const response = await (searchContextInput
        ? getFilteredBeersService(searchContextInput)
        : getAllBeersService());

      setBeers(response.data);
      setIsFetching(false);
    } catch (error) {
      redirect("/error");
    }
  };

  useDebounce(searchContextInput, 500, () => getData());

  return (
    <>
      <Header />
      <Layout>
        <SearchForm />
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

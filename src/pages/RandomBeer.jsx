import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import { getRandomBeerService } from "../services/beers.services";

function RandomBeer() {
  const [beer, setBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getRandomBeerService();

      setBeer(response.data);
      setIsFetching(false);
    } catch (error) {
      redirect("/error");
    }
  };

  return (
    <>
      <Header />
      <Layout>
        {isFetching ? (
          <LoadSpinner hidddenText="Loading random beer" />
        ) : (
          <BeerDetail {...beer} />
        )}
      </Layout>
    </>
  );
}

export default RandomBeer;

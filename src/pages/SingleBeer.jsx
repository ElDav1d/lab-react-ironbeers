import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BeerDetail from "../components/BeerDetail";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";
import { getSingleBeerService } from "../services/beers.services";

function SingleBeer() {
  const { beerName, beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const redirect = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getSingleBeerService(beerId);

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
          <LoadSpinner hidddenText={`Loading ${beerName}`} />
        ) : (
          <BeerDetail {...beer} />
        )}
      </Layout>
    </>
  );
}

export default SingleBeer;

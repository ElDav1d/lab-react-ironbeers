import { memo } from "react";
import { useEffect, useState, useContext } from "react";
import { NewBeerContext } from "../context/newBeer.context";
import { useNavigate } from "react-router-dom";
import BeerForm from "../components/BeerForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import { createBeerService } from "../services/beers.services";

const NewBeer = memo(() => {
  const [isSending, setIsSending] = useState(false);
  const redirect = useNavigate();
  const { newContextBeer } = useContext(NewBeerContext);

  console.log(newContextBeer);

  useEffect(() => {
    if (newContextBeer) {
      sendData();
    }
  }, [newContextBeer]);

  const sendData = async () => {
    try {
      setIsSending(true);

      await createBeerService(newContextBeer);

      setIsSending(false);
      redirect("/beers");
    } catch (error) {
      setIsSending(false);
      redirect("/error");
    }
  };

  return (
    <>
      <Header />
      <Layout>
        <BeerForm isSending={isSending} />
      </Layout>
    </>
  );
});

export default NewBeer;

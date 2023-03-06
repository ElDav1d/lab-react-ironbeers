import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { NewBeerContext } from "../context/newBeer.context";
import { useNavigate } from "react-router-dom";
import BeerForm from "../components/BeerForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function NewBeer() {
  const [isSending, setIsSending] = useState(false);
  const redirect = useNavigate();
  const { newContextBeer } = useContext(NewBeerContext);

  useEffect(() => {
    if (newContextBeer) {
      sendData();
    }
  }, [newContextBeer]);

  const sendData = async () => {
    try {
      setIsSending(true);

      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newContextBeer
      );

      setIsSending(false);
      redirect("/beers");
    } catch (error) {
      console.log(error);
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
}

export default NewBeer;

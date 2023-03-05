import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeerForm from "../components/BeerForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

function NewBeer() {
  const [isSending, setIsSending] = useState(false);
  const [newBeer, setNewBeer] = useState(null);
  const redirect = useNavigate();

  useEffect(() => {
    if (newBeer) {
      sendData();
    }
  }, [newBeer]);

  const sendData = async () => {
    try {
      setIsSending(true);

      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );

      setNewBeer(null);
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
        <BeerForm setNewBeer={setNewBeer} isSending={isSending} />
      </Layout>
    </>
  );
}

export default NewBeer;

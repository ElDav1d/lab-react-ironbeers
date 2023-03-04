import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BeerForm from "../components/BeerForm";
import Header from "../components/Header/Header";

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
      <main>
        <BeerForm setNewBeer={setNewBeer} isSending={isSending} />
      </main>
    </>
  );
}

export default NewBeer;

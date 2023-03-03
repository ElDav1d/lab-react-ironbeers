import { useParams } from "react-router-dom";
import Header from "../components/Header";

function SingleBeer() {
  const { beerId } = useParams();

  return (
    <>
      <Header />
      <h1>{beerId}</h1>;
    </>
  );
}

export default SingleBeer;

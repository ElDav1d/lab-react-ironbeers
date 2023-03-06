import { createContext, useState } from "react";

const NewBeerContext = createContext();

const NewBeerWrapper = (props) => {
  const cleanState = {
    name: "",
    tagline: "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: 0,
    contributed_by: "",
  };

  const [beerContextInput, setBeerInput] = useState(cleanState);
  const [newContextBeer, setNewBeer] = useState(null);

  const handleContextBeerInput = (event) => {
    const newBeerInput = { ...beerContextInput };

    newBeerInput[event.target.name] = event.target.value;

    setBeerInput(newBeerInput);
  };

  const handleBeerContextSubmit = (event) => {
    event.preventDefault();

    setNewBeer(beerContextInput);
    setBeerInput(cleanState);
  };

  const passedContext = {
    beerContextInput,
    newContextBeer,
    handleContextBeerInput,
    handleBeerContextSubmit,
  };

  return (
    // Here we return some JSX where children is the whole application
    <NewBeerContext.Provider value={passedContext}>
      {props.children}
    </NewBeerContext.Provider>
  );
};

export { NewBeerWrapper, NewBeerContext };

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

  const [beerInput, setBeerInput] = useState(cleanState);
  const [newBeer, setNewBeer] = useState(null);

  const handleBeerInput = (event) => {
    const newBeerInput = { ...beerInput };

    newBeerInput[event.target.name] = event.target.value;

    setBeerInput(newBeerInput);
  };

  const handleBeerSubmit = (event) => {
    event.preventDefault();

    setNewBeer(beerInput);
    setBeerInput(cleanState);
  };

  const passedContext = {
    beerInput,
    newBeer,
    handleBeerInput,
    handleBeerSubmit,
  };

  return (
    // Here we return some JSX where children is the whole application
    <NewBeerContext.Provider value={passedContext}>
      {props.children}
    </NewBeerContext.Provider>
  );
};

export { NewBeerWrapper, NewBeerContext };

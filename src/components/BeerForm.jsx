import { useState } from "react";

function BeerForm({ setNewBeer, isSending }) {
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

  const handleInput = (event) => {
    const newBeerInput = { ...beerInput };

    newBeerInput[event.target.name] = event.target.value;

    setBeerInput(newBeerInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setNewBeer(beerInput);
    setBeerInput(cleanState);
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={handleInput}
        value={beerInput.name}
      />
      <br />
      <br />
      <label htmlFor="tagline">Tagline</label>
      <input
        type="text"
        name="tagline"
        onChange={handleInput}
        value={beerInput.tagline}
      />
      <br />
      <br />
      <label htmlFor="descriptiom">Description</label>
      <textarea
        type="text"
        name="description"
        rows="10"
        cols="50"
        onChange={handleInput}
        value={beerInput.description}
      ></textarea>
      <br />
      <br />
      <label htmlFor="first_brewed">First Brewed</label>
      <input
        type="text"
        name="first_brewed"
        onChange={handleInput}
        value={beerInput.first_brewed}
      />
      <br />
      <br />
      <label htmlFor="first_brewed">Brewers Tips</label>
      <input
        type="text"
        name="brewers_tips"
        onChange={handleInput}
        value={beerInput.brewers_tips}
      />
      <br />
      <br />
      <label htmlFor="attenuation_level">Attenuation Level</label>
      <input
        type="number"
        name="attenuation_level"
        onChange={handleInput}
        value={beerInput.attenuation_level}
      />
      <br />
      <br />
      <label htmlFor="contributed_by">Contributed By</label>
      <input
        type="text"
        name="contributed_by"
        onChange={handleInput}
        value={beerInput.contributed_by}
      />
      <br />
      <br />
      <button onClick={handleSubmit} disabled={isSending}>
        ADD NEW
      </button>
    </form>
  );
}

export default BeerForm;

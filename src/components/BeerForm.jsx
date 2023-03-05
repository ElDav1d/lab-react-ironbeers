import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

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
    <Container as="form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="name"
          onChange={handleInput}
          value={beerInput.name}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="tagline">Tagline</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="tagline"
          onChange={handleInput}
          value={beerInput.tagline}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="descriptiom">Description</Form.Label>
        <Form.Control
          size="lg"
          as="textarea"
          name="description"
          rows="10"
          cols="50"
          onChange={handleInput}
          value={beerInput.description}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first_brewed">First Brewed</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="first_brewed"
          onChange={handleInput}
          value={beerInput.first_brewed}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first_brewed">Brewers Tips</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="brewers_tips"
          onChange={handleInput}
          value={beerInput.brewers_tips}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="attenuation_level">Attenuation Level</Form.Label>
        <Form.Control
          size="lg"
          type="number"
          name="attenuation_level"
          onChange={handleInput}
          value={beerInput.attenuation_level}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="contributed_by">Contributed By</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="contributed_by"
          onChange={handleInput}
          value={beerInput.contributed_by}
          disabled={isSending}
        />
      </Form.Group>

      {isSending ? (
        <LoadSpinner hidddenText="Sending new beer" />
      ) : (
        <Button onClick={handleSubmit} disabled={isSending}>
          ADD NEW
        </Button>
      )}
    </Container>
  );
}

export default BeerForm;

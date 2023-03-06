import { useContext } from "react";
import { NewBeerContext } from "../context/newBeer.context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

function BeerForm({ isSending }) {
  const { beerInput, handleBeerInput, handleBeerSubmit } =
    useContext(NewBeerContext);

  return (
    <Container as="form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="name"
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
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
          // onChange={handleInput}
          onChange={handleBeerInput}
          value={beerInput.contributed_by}
          disabled={isSending}
        />
      </Form.Group>

      {isSending ? (
        <LoadSpinner hidddenText="Sending new beer" />
      ) : (
        <Button
          // onClick={handleSubmit}
          onClick={handleBeerSubmit}
          disabled={isSending}
        >
          ADD NEW
        </Button>
      )}
    </Container>
  );
}

export default BeerForm;

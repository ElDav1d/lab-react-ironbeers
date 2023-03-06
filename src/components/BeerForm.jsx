import { useContext } from "react";
import { NewBeerContext } from "../context/newBeer.context";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import LoadSpinner from "../components/LoadSpinner/LoadSpinner";

function BeerForm({ isSending }) {
  const { beerContextInput, handleContextBeerInput, handleContextBeerSubmit } =
    useContext(NewBeerContext);

  return (
    <Container as="form">
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Name</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="name"
          onChange={handleContextBeerInput}
          value={beerContextInput.name}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="tagline">Tagline</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="tagline"
          onChange={handleContextBeerInput}
          value={beerContextInput.tagline}
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
          onChange={handleContextBeerInput}
          value={beerContextInput.description}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first_brewed">First Brewed</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="first_brewed"
          onChange={handleContextBeerInput}
          value={beerContextInput.first_brewed}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first_brewed">Brewers Tips</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="brewers_tips"
          onChange={handleContextBeerInput}
          value={beerContextInput.brewers_tips}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="attenuation_level">Attenuation Level</Form.Label>
        <Form.Control
          size="lg"
          type="number"
          name="attenuation_level"
          onChange={handleContextBeerInput}
          value={beerContextInput.attenuation_level}
          disabled={isSending}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="contributed_by">Contributed By</Form.Label>
        <Form.Control
          size="lg"
          type="text"
          name="contributed_by"
          onChange={handleContextBeerInput}
          value={beerContextInput.contributed_by}
          disabled={isSending}
        />
      </Form.Group>

      {isSending ? (
        <LoadSpinner hidddenText="Sending new beer" />
      ) : (
        <Button onClick={handleContextBeerSubmit} disabled={isSending}>
          ADD NEW
        </Button>
      )}
    </Container>
  );
}

export default BeerForm;

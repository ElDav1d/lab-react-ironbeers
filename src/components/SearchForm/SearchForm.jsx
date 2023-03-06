import { useContext } from "react";
import { SearchBeerContext } from "../../context/searchBeer.context";
import Form from "react-bootstrap/Form";
import "./SearchForm.css";

function SearchForm({ setSearchInput }) {
  const { handleContextSearch } = useContext(SearchBeerContext);

  return (
    <>
      <Form className="search-form">
        <Form.Control
          type="text"
          name="searchInput"
          onChange={handleContextSearch}
          placeholder="SEARCH YOUR BEER"
        />
      </Form>
    </>
  );
}

export default SearchForm;

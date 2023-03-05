import Form from "react-bootstrap/Form";
import "./SearchForm.css";

function SearchForm({ setSearchInput }) {
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <Form className="search-form">
        <Form.Control
          type="text"
          name="searchInput"
          onChange={handleSearch}
          placeholder="SEARCH YOUR BEER"
        />
      </Form>
    </>
  );
}

export default SearchForm;

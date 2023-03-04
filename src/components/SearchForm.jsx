function SearchForm({ setSearchInput }) {
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <form>
        <label htmlFor="searchInput">SEARCH YOUR BEER</label>
        <input type="text" name="searchInput" onChange={handleSearch} />
      </form>
    </>
  );
}

export default SearchForm;

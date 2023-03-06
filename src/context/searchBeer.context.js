import { createContext, useState } from "react";

const SearchBeerContext = createContext();

const SearchBeerWrapper = (props) => {
  const [searchContextInput, setSearchInput] = useState("");

  const handleContextSearch = (event) => {
    setSearchInput(event.target.value);
  };

  const passedContext = {
    searchContextInput,
    handleContextSearch,
  };

  return (
    <SearchBeerContext.Provider value={passedContext}>
      {props.children}
    </SearchBeerContext.Provider>
  );
};

export { SearchBeerContext, SearchBeerWrapper };

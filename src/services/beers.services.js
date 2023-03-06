import service from "./config.services";

const getAllBeersService = () => {
  return service.get("/");
};
const createBeerService = (newBeer) => {
  return service.post("/new", newBeer);
};

const getFilteredBeersService = (query) => {
  return service.get(`/search?q=${query}`);
};

const getSingleBeerService = (beerId) => {
  return service.get(`/${beerId}`);
};

const getRandomBeerService = () => {
  return service.get(`/random`);
};

export {
  getAllBeersService,
  createBeerService,
  getFilteredBeersService,
  getSingleBeerService,
  getRandomBeerService,
};

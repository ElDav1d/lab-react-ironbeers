import BeerItem from "./BeerItem";

function BeerList({ beers }) {
  return (
    <ul>
      {beers.map((beer) => (
        <BeerItem key={beer._id} {...beer} />
      ))}
    </ul>
  );
}

export default BeerList;

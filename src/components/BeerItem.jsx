import { NavLink } from "react-router-dom";

function BeerItem({ image_url, name, tagline, contributed_by, _id }) {
  return (
    <li>
      <NavLink to={`/beers/${name}/${_id}`}>
        <img src={image_url} alt={`A pic of ${name}`} height={100} />
        <div>
          <h2>{name}</h2>
          <h3>{tagline}</h3>
          <h4>Created by: {contributed_by}</h4>
        </div>
      </NavLink>
    </li>
  );
}

export default BeerItem;

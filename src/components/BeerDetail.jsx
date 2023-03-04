function BeerDetail({
  image_url,
  name,
  tagline,
  first_brewed,
  attenuation_level,
  description,
  contributed_by,
}) {
  return (
    <article>
      <header>
        <img src={image_url} alt={`A pic of ${name} beer`} height={100} />
        <div>
          <h1>{name}</h1>
          <h3>{attenuation_level}</h3>
          <h2>{tagline}</h2>
          <h4>{first_brewed}</h4>
        </div>
      </header>
      <section>
        <p>{description}</p>
      </section>
      <footer>
        <p>{contributed_by}</p>
      </footer>
    </article>
  );
}

export default BeerDetail;

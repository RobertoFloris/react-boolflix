const CardTv = (props) => {

  const imageError = (e) => {
    e.target.src = "/img/flag.png";
  };

  const { series } = props;
  return (
    <li>
      <div>
        <p>{series?.name}</p>
      </div>
      <div>
        <p>{series?.original_name}</p>
      </div>
      <div>
        <p>{series?.original_language}</p>
      </div>
      <div>
        <p>{series?.vote_average}</p>
      </div>
      <div>
        <img
          src={`https://flagsapi.com/${series?.original_language.toUpperCase() == "EN" ? "GB" : series?.original_language.toUpperCase()}/flat/64.png`}
          onError={imageError}
          alt="flag"
          style={{ width: "64px", height: "64px" }}
        />

      </div>
    </li>
  )
}

export default CardTv
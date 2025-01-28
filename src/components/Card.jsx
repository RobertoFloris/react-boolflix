const Card = (props) => {

  const imageError = (e) => {
    e.target.src = "/img/flag.png";
  };

  const { movie } = props;
  return (
    <li>
      <div>
        <p>{movie?.title}</p>
      </div>
      <div>
        <p>{movie?.original_title}</p>
      </div>
      <div>
        <p>{movie?.original_language}</p>
      </div>
      <div>
        <p>{movie?.vote_average}</p>
      </div>
      <div>
        <img
          src={`https://flagsapi.com/${movie?.original_language.toUpperCase() == "EN" ? "GB" : movie?.original_language.toUpperCase()}/flat/64.png`}
          onError={imageError}
          alt="flag"
          style={{ width: "64px", height: "64px" }}
        />

      </div>
    </li>
  )
}

export default Card
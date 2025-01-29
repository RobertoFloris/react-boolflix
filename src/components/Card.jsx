import Stars from "./Stars";

const Card = (props) => {

  const imageError = (e) => {
    e.target.src = "/img/flag.png";
  };

  const { item } = props;
  return (
    <li>
      <div>
        <p>{item?.title || item?.name}</p>
      </div>
      <div>
        <p>{item?.original_title || item?.original_name}</p>
      </div>
      <div>
        <img
          src={`https://flagsapi.com/${item?.original_language.toUpperCase() === "EN"
              ? "GB"
              : item?.original_language.toUpperCase() === "JA"
                ? "JP"
                : item?.original_language.toUpperCase()
            }/flat/64.png`}
          onError={imageError}
          alt="flag"
          style={{ width: "64px", height: "64px" }}
        />

      </div>
      <div>
        <p> <Stars vote={Math.round((item?.vote_average) / 2)} />  </p>
      </div>
    </li>
  )
}

export default Card

import Stars from "./Stars";

const Card = (props) => {

  const imageError = (e) => {
    e.target.src = "/img/flag.png";
  };

  const { item } = props;
  return (
    <div
      className="col mt-3 mb-3 cardFilm"
    >
      <img
        className="wallpaper"
        src={`https://image.tmdb.org/t/p/w342/${item?.poster_path}`}
        onError={imageError}
        alt="IMG"
        style={{
          width: "356px",
          height: "450px",
        }}
      />

      <div
        className="overlay"
      >
        <p className="title">Title: {item?.title || item?.name}</p>
        <p className="originalTitle">
          Original title: {item?.original_title || item?.original_name}
        </p>
        <div className="flag">
          <img
            src={`https://flagsapi.com/${item?.original_language.toUpperCase() === "EN"
              ? "GB"
              : item?.original_language.toUpperCase() === "JA"
                ? "JP"
                : item?.original_language.toUpperCase() === "KO"
                  ? "KR"
                  : item?.original_language.toUpperCase()
              }/flat/64.png`}
            onError={imageError}
            alt="flag"
            style={{ width: "64px", height: "64px" }}
          />
        </div>
        <p className="stars">
          <Stars vote={Math.round(item?.vote_average / 2)} />
        </p>
        <p className="overview" style={{ width: "100%" }}>
          {item?.overview}
        </p>
      </div>
    </div>
  );
};

export default Card;

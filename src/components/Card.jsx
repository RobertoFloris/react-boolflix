
const Card = (props) => {

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
    </li>
  )
}

export default Card
import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import CardMovie from "./CardMovie"
import CardTv from "./CardTv"

const Main = () => {

  const { movies, tv, fetchMovies, fetchTv } = useGlobalContext()

  useEffect(() => {
    fetchMovies()
    fetchTv()
  }, [movies, tv])

  return (
    <main>
      <section className="movies">
        <div className="container text-center">
          <h1>LISTA FILM</h1>
        </div>
        <div className="container">
          <ul>
            {movies?.results?.map(movie => (
              <CardMovie key={movie.id} movie={movie} />
            ))}
          </ul>
        </div>
      </section>

      <section className="tv">
        <div className="container text-center">
          <h1>LISTA SERIE TV</h1>
        </div>
        <div className="container">
          <ul>
            {tv?.results?.map(series => (
              <CardTv key={series.id} series={series} />
            ))}
          </ul>
        </div>
      </section>

    </main>
  )
}

export default Main
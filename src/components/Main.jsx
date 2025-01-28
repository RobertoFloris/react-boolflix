import { useGlobalContext } from "../context/GlobalContext"
import { useEffect } from "react"
import Card from "../components/Card"

const Main = () => {

  const { movies, fetchMovies } = useGlobalContext()

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <main>
      <div className="container text-center">
        <h1>LISTA FILM</h1>
      </div>
      <div className="container">
        <ul>
          {movies?.results?.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main
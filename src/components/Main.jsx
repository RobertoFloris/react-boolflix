import { useGlobalContext } from "../context/GlobalContext"
import ResultSection from "./ResultSection"

const Main = () => {

  const { movies, tv } = useGlobalContext()

  return (
    <main>
      <ResultSection title={"LISTA FILM"} film={movies} />

      <ResultSection title={"SERIE TV"} film={tv} />

    </main>
  )
}

export default Main
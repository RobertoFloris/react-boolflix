import axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("")

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=98f8a1f1d4b7b29908a11d1ce3814017&query=${query}`)
      .then(res => {
        setMovies(res.data)
      })
  }

  return (
    <GlobalContext.Provider value={{ movies, fetchMovies, setQuery }}>
      {children}
    </GlobalContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext }
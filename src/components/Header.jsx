import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

const Header = () => {

  const { query, setQuery, fetchMovies } = useGlobalContext();
  const [inputChange, setInputChange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputChange);
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <header>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BoolFlix</a>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={inputChange}
              onChange={(e) => setInputChange(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;
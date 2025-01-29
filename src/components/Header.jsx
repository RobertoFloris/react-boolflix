import { useGlobalContext } from "../context/GlobalContext";

const Header = () => {

  const { query, setQuery, fetchMovies, fetchTv } = useGlobalContext();

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      fetchMovies();
      fetchTv();
    }

  }

  return (
    <header>
      <div className="container d-flex justify-content-around headerNav p-3">
        <a className="navbar-brand">BoolFlix</a>

        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          style={{ maxWidth: "300px" }}
        />

      </div>
    </header>
  );
};

export default Header;
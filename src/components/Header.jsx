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
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">BoolFlix</a>

          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyUp}
          />

        </div>
      </nav>
    </header>
  );
};

export default Header;
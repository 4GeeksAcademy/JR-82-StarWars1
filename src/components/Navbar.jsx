import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  function favorites() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Favorites <span className="badge badge-light">{store.favorites.length}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {store.favorites.length === 0 && (
            <Dropdown.Item disabled>No favorites yet</Dropdown.Item>
          )}
          {store.favorites.map((item, index) => (
            <Dropdown.Item key={index} className="d-flex justify-content-between align-items-center">
              <Link
                to={`/details/${item.type}/${item.uid}`}
                style={{ textDecoration: "none", color: "inherit", flex: 1 }}
              >
                {item.name}
              </Link>
              <span
                style={{ cursor: "pointer", marginLeft: "10px", color: "red" }}
                title="Remove"
                onClick={e => {
                  e.preventDefault();
                  dispatch({
                    type: "REMOVE_FAVORITE",
                    payload: { uid: item.uid, type: item.type }
                  });
                }}
              >
                🗑️
              </span>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars!! Database</span>
        </Link>
        <div className="ml-auto">
          {favorites()}
        </div>
      </div>
    </nav>
  );
};
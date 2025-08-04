import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export const Navbar = () => {

	function favorites() {
		return (
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

					<Dropdown.Menu>

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
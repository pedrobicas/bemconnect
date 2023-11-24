import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../imgs/logo.png";
import { Link } from "react-router-dom";
import "../Buttons/sass.scss"
import "./nav.css";

function BasicExample() {
	const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
	return (
		<Navbar expand="lg" className="bg-body">
			<Container>
				<Link to="/bemconnect" className="logo">
					<img src={Logo} alt="Logo do Site" />
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link><Link to="/bemconnect/">Inicio</Link></Nav.Link>
						<Nav.Link><Link to="/bemconnect/sobre">Sobre</Link></Nav.Link>
						<Nav.Link><Link to="/bemconnect/aplicativo">Aplicativo</Link></Nav.Link>
					</Nav>
					<Nav>
						{/* // Se não tiver um usuario logado, deve apresentar um botão para logar
							// Se ja estiver logado, deve aparece o botao de perfil */}
						{loggedUser ? (
							<Link to="/bemconnect/perfil" className="nav-link">
								{/* // Quero que seja um botao */}
								<button className="button-login">Perfil</button>
							</Link>
						) : (
							<Link to="/bemconnect/login" className="nav-link">
								<button className="button-login">Entrar</button>
							</Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default BasicExample;
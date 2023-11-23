import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Aplicativo } from "./pages/aplicativo";
import { Register } from "./pages/cadastro";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
function App() {
	return (
		<div className="app">
			<Router>
				{/* Rota para as páginas */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/sobre" element={<Sobre />} />
					<Route exact path="/aplicativo" element={<Aplicativo />} />
					<Route exact path="/cadastro" element={<Register />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/perfil" element={<Profile />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

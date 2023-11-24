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
					<Route exact path="/bemconnect" element={<Home />} />
					<Route exact path="/bemconnect/sobre" element={<Sobre />} />
					<Route exact path="/bemconnect/aplicativo" element={<Aplicativo />} />
					<Route exact path="/bemconnect/cadastro" element={<Register />} />
					<Route exact path="/bemconnect/login" element={<Login />} />
					<Route exact path="/bemconnect/perfil" element={<Profile />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Aplicativo } from "./pages/aplicativo";

function App() {
	return (
		<div className="app">
			<Router>
				{/* Rota para as páginas */}
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/sobre" element={<Sobre />} />
					<Route exact path="/aplicativo" element={<Aplicativo />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

import React, { useEffect, useState } from "react";
import MainMenu from "../componentes/MainMenu";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import HomeSection from "../componentes/HomeSection";
import Doutor from "../imgs/doutor.png"

export function Home() {
	return (
		<div>
			<NavBar />
			<MainMenu text="Tranquilidade em Cada Conexão." url = {Doutor} />
			<HomeSection/>
			<Footer />
		</div>
	);
}

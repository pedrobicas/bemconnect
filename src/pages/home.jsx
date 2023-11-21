import React, { useEffect, useState } from "react";
import MainMenu from "../componentes/MainMenu";
import Title from "../componentes/Title";
import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import HomeSection from "../componentes/HomeSection";

export function Home() {
	return (
		<div>
			<NavBar />

			<MainMenu text="Tranquilidade em Cada Conexão." />
			<HomeSection/>
			<Footer />
		</div>
	);
}

import Footer from "../componentes/Footer";
import NavBar from "../componentes/NavBar";
import Title from "../componentes/Title";
import CustomerForm from "../componentes/CustomerForm";
import { Container } from "../componentes/Forms/Container";

import "../componentes/Buttons/sass.scss"

export const Profile = () => {
	const loggedUser = JSON.parse(sessionStorage.getItem("loggedUser")) || {};
	const userData = loggedUser["data"];

	function updateCustomer(customerObj) {
		let customerList = JSON.parse(sessionStorage.getItem("customers")) || [];
		const index = customerList.findIndex((c) => c.email === customerObj.email);
		customerList[index] = customerObj;
		sessionStorage.setItem("customers", JSON.stringify(customerList));
		const user = {
			type: "Customer",
			data: customerObj,
		};
		sessionStorage.setItem("loggedUser", JSON.stringify(user));
		window.location.href = "/perfil";
	}

	function logOut() {
		sessionStorage.removeItem("loggedUser");
		window.location.href = "/";
	}

	return (
		<div>
			<NavBar />
			<Container>
			<Title titulo="Minha conta" />
			<CustomerForm
					emailValue={userData.email}
					firstNameValue={userData.firstName}
					lastNameValue={userData.lastName}
					passwordValue={userData.password}
					onSubmitAction={(data) => {
						updateCustomer(data);
					}}
				/>
			<button className="button-login" onClick={logOut}>Sair</button>
			</Container>
			<Footer />
		</div>
	);
};

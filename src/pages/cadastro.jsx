import { useState } from "react";
import CustomerForm from "../componentes/CustomerForm";
import { Link } from "react-router-dom";
import { Container } from "../componentes/Forms/Container";

export function Register() {
	function registerCustomer(customerObj) {
		const customers = JSON.parse(sessionStorage.getItem("Customers")) || [];
		customers.push(customerObj);
		sessionStorage.setItem("customers", JSON.stringify(customers));
		window.location.href = "/login";
	}
	return (
		<>
		<Container>
			<CustomerForm
					onSubmitAction={(data) => {
						registerCustomer(data);
					}}
				/>
			<Link to="/login">Já possui um cadastro?</Link> <br />
			<Link to="/">Ir para Home</Link>
			</Container>
		</>
	);
}

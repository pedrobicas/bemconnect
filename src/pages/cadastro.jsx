import { useState } from "react";
import CustomerForm from "../componentes/CustomerForm";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../componentes/Forms/Container";

export function Register() {
	const navigate = useNavigate()
	
	function registerCustomer(customerObj) {
		const customers = JSON.parse(sessionStorage.getItem("Customers")) || [];
		customers.push(customerObj);
		sessionStorage.setItem("customers", JSON.stringify(customers));
		navigate('/bemconnect/login')
	}
	return (
		<>
		<Container>
			<CustomerForm
					onSubmitAction={(data) => {
						registerCustomer(data);
					}}
				/>
			<Link to="/bemconnect/login">Já possui um cadastro?</Link> <br />
			<Link to="/bemconnect">Ir para Home</Link>
			</Container>
		</>
	);
}

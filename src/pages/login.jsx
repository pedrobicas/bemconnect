import React, { useState } from "react";
import { Input } from "../componentes/Forms";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import "../componentes/Buttons/sass.scss"
import Logo from "../imgs/logo.png";
import { Link, useNavigate } from "react-router-dom";


export function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});
	const navigate = useNavigate()

	function setErrorToEntity(entityName, errorMessage) {
		setErrors((prevValue) => {
			const newObject = { ...prevValue };
			if (!newObject[entityName]) newObject[entityName] = errorMessage;
			return newObject;
		});
	}

	function validateForm() {
		let isFormValid = true;
		if (!email) {
			setErrorToEntity(
				"email",
				"O campo Nome de usuário ou Email é obrigatório."
			);
			isFormValid = false;
		}

		if (!password) {
			setErrorToEntity("password", "O campo de senha é obrigatório.");
			isFormValid = false;
		}

		return isFormValid;
	}

	function findCustomer() {
		const customers = JSON.parse(sessionStorage.getItem("customers")) || [];
		const customerObj = customers.find((c) => c.email === email);
		return customerObj;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid) return;

		const customerObj = findCustomer();

		if (!customerObj) {
			setErrorToEntity("user", "Usuário não encontrado.");
			return;
		}
		let user;
		if (!!customerObj) {
			if (customerObj.password !== password) {
				setErrorToEntity("password", "Senha incorreta.");
				return;
			}
			user = {
				type: "Customer",
				data: customerObj,
			};
		}else {
			setErrorToEntity("user", "Usuário não encontrado.");
			return;
		}
		sessionStorage.setItem("loggedUser", JSON.stringify(user));
		navigate('/bemconnect')
	};

	return (
		<>
				<LoginContainer>
					<ContainerLeft>
					</ContainerLeft>
					<ContainerRigth>
						<ImgLogo src={Logo}/>
						<Title>Faça seu login</Title>
						<Form onSubmit={handleSubmit} style={{ width: "50%" }}>
							<Input
								controlId="email"
								label="Email"
								type="text"
								placeholder="Digite seu email"
								entity={email}
								setEntity={setEmail}
								errorList={errors}
								setErrorList={setErrors}
								errorName={"email"}
							/>
							<Input
								controlId="password"
								label="Senha"
								type="password"
								placeholder="Digite sua senha"
								entity={password}
								setEntity={setPassword}
								errorList={errors}
								setErrorList={setErrors}
								errorName={"password"}
							/>
							<FormContainer>
								<button className="button-login" variant="primary" type="submit">
									Entrar
								</button>
							</FormContainer>

						</Form>
						<Link to="/bemconnect/cadastro">Não tem um registro? &gt; </Link>
						<Link to="/bemconnect">Ir para Home</Link>
					</ContainerRigth>
				</LoginContainer>
		</>
	);

}


const LoginContainer = styled.div`
display: flex;
align-items: center;
	justify-content: center;
`;

const ContainerLeft = styled.div`
    display: none;

`;
const Title = styled.h2`
text-align: center;
    font-size: 21px;
    padding: 30px 0px 30px 0px;
    color: #646464;
`
const ContainerRigth = styled.div`
width: 50%;
    z-index: 100;
    height: 100vh;
    background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media (max-width: 700px) {
        width: 100%;
}
`;

const ImgLogo = styled.img`
    width: 15em;
    height: 5em;
`
const FormContainer = styled.div`
display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`
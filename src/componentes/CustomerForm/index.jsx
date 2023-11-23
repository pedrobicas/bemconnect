import React, { useState, useCallback } from "react";
import { Input } from "../Forms";
import { Form } from "react-bootstrap";
import "../Buttons/sass.scss"

function isValidEmail(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	return emailPattern.test(email);
}

export default function CustomerForm({
	emailValue,
	firstNameValue,
	lastNameValue,
	passwordValue,
	confirmPasswordValue,
	onSubmitAction,
}) {
	const [email, setEmail] = useState(emailValue || "");
	const [firstName, setFirstName] = useState(firstNameValue || "");
	const [lastName, setLastName] = useState(lastNameValue || "");
	const [password, setPassword] = useState(passwordValue || "");
	const [confirmPassword, setConfirmPassword] = useState(
		confirmPasswordValue || ""
	);
	const [errors, setErrors] = useState({});

	const isEmailAvailable = () => {
		const customers = JSON.parse(sessionStorage.getItem("customers")) || [];
		const customerObj = customers.find((c) => c.email === email);
		if (customerObj) return false;
		return true;
	};

	function setErrorToEntity(entityName, errorMessage) {
		setErrors((prevValue) => {
			const newObject = { ...prevValue };
			if (!newObject[entityName]) newObject[entityName] = errorMessage;
			return newObject;
		});
	}

	let validateObligatoryFields = useCallback(() => {
		let formsIsValid = true;

		let obligatoryEntities = [
			{ entity: email, entityName: "email" },
			{ entity: firstName, entityName: "firstName" },
			{ entity: lastName, entityName: "lastName" },
			{ entity: password, entityName: "password" },
			{ entity: confirmPassword, entityName: "confirmPassword" },
		];

		for (let i = 0; i < obligatoryEntities.length; i++) {
			const { entity, entityName } = obligatoryEntities[i];
			if (!entity) {
				setErrorToEntity(entityName, "Campo obrigatório");
				formsIsValid = false;
			}
		}
		return formsIsValid;
	}, [email, firstName, lastName, password, confirmPassword]);

	function validateForm() {
		let isFormValid = true;

		const response = validateObligatoryFields();
		if (!response) isFormValid = false;

		if (!isValidEmail(email)) {
			setErrorToEntity("email", "Email inválido");
			isFormValid = false;
		} else if (!isEmailAvailable) {
			setErrorToEntity("email", "Email já cadastrado");
			isFormValid = false;
		}

		if (password !== confirmPassword) {
			setErrorToEntity("confirmPassword", "Senhas não conferem");
			isFormValid = false;
		}

		return isFormValid;
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const isFormValid = validateForm();
		if (!isFormValid) return;

		const customerObj = {
			firstName,
			lastName,
			email,
			password,
		};
		onSubmitAction(customerObj);
	};

	return (
		<>
			<Form onSubmit={handleSubmit} style={{ width: "50%" }}>
				<Input
					controlId="firstName"
					label="Nome"
					type="text"
					placeholder="Digite seu nome"
					entity={firstName}
					setEntity={setFirstName}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"firstName"}
				/>
				<Input
					controlId="lastName"
					label="Sobrenome"
					type="text"
					placeholder="Digite seu sobrenome"
					entity={lastName}
					setEntity={setLastName}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"lastName"}
				/>
				<Input
					controlId="email"
					label="Email"
					type="email"
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
				<Input
					controlId="confirmPassword"
					label="Confirme a senha"
					type="password"
					placeholder="Confirme sua senha"
					entity={confirmPassword}
					setEntity={setConfirmPassword}
					errorList={errors}
					setErrorList={setErrors}
					errorName={"confirmPassword"}
				/>
				<button className="button-login" variant="primary" type="submit">
					Enviar
				</button>
			</Form>
		</>
	);
}

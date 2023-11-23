import React, { memo } from "react";
import { Form } from "react-bootstrap";

const InputComponent = ({
	controlId,
	label,
	type,
	placeholder,
	entity,
	setEntity,
	errorList,
	setErrorList,
	errorName,
	onChangeAction,
	onBlur,
}) => {
	const treatError = !!errorList && !!setErrorList && !!errorName;
	let error;
	if (treatError) error = errorList[errorName];
	return (

		<Form.Group controlId={controlId}>
			<Form.Label>{label}</Form.Label>
			<Form.Control
				type={type}
				placeholder={placeholder}
				value={entity}
				onChange={(e) => {
					if (onChangeAction) onChangeAction(e);
					else {
						setEntity(() => {
							if (!!error)
								setErrorList((prevValue) => {
									const newErrorList = { ...prevValue };
									delete newErrorList[errorName];
									return newErrorList;
								});
							return e.target.value;
						});
					}
				}}
				onBlur={(e) => {
					if (onBlur) onBlur(e);
				}}
				isInvalid={!!error}
			/>
			<Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
			<br/>
		</Form.Group>

	);
};

export default memo(InputComponent);


import React, { memo } from "react";
import { Form } from "react-bootstrap";

const SelectComponent = ({ controlId, label, entity, setEntity, options }) => {
	return (
		<Form.Group controlId={controlId}>
			<Form.Label>{label}</Form.Label>
			<Form.Select
				value={entity}
				onChange={(e) => {
					setEntity(e.target.value);
				}}
			>
				{options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</Form.Select>
		</Form.Group>
	);
};

export default memo(SelectComponent);

import React, { memo } from "react";
import { Form } from "react-bootstrap";

const CheckBoxComponent = ({ label, value, setValue, id }) => {
	return (
		<Form.Check
			type="checkbox"
			label={label}
			checked={value}
			onChange={(e) => {
				setValue(!value);
			}}
			id={`formHorizontalCheckbox${id}`}
		/>
	);
};

export default memo(CheckBoxComponent);

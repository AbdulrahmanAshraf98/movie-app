import React from "react";

const Input = React.forwardRef(({ id, label, type, ...otherProps }, ref) => {
	return (
		<>
			{label && <label htmlFor={id}>{label}</label>}
			<input id={id} type={type} ref={ref} {...otherProps} />
		</>
	);
});
export default Input;

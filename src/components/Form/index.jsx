import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

import "./Form.css";

function Form() {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<label>Your Name</label>
			<input name='name' ref={register} />
			<label>Your Email Address</label>
			<input
				name='exampleRequired'
				ref={register({ required: true, maxLength: 10 })}
			/>
			{errors.exampleRequired && (
				<p className='errortext'>This field is required</p>
			)}
			<label>Your Message</label>
			<input name='message' ref={register} />
			<input type='submit' />
		</form>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Form />, rootElement);

export default <Form></Form>;

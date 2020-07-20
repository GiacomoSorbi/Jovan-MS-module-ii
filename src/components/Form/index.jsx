import React from "react";
import ReactDOM from "react-dom";
import "./Form.css";

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: {},
			errors: {},
		};
	}

	handleValidation() {
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if (!fields["name"]) {
			formIsValid = false;
			errors["name"] = "Cannot be empty";
		}

		if (typeof fields["name"] !== "undefined") {
			if (!fields["name"].match(/^[a-zA-Z]+$/)) {
				formIsValid = false;
				errors["name"] = "Only letters";
			}
		}

		if (!fields["email"]) {
			formIsValid = false;
			errors["email"] = "Cannot be empty";
		}

		if (typeof fields["email"] !== "undefined") {
			let lastAtPos = fields["email"].lastIndexOf("@");
			let lastDotPos = fields["email"].lastIndexOf(".");

			if (
				!(
					lastAtPos < lastDotPos &&
					lastAtPos > 0 &&
					fields["email"].indexOf("@@") == -1 &&
					lastDotPos > 2 &&
					fields["email"].length - lastDotPos > 2
				)
			) {
				formIsValid = false;
				errors["email"] = "Email is not valid";
			}
		}

		this.setState({ errors: errors });
		return formIsValid;
	}

	contactSubmit(e) {
		e.preventDefault();
		if (this.handleValidation()) {
			alert("Form submitted");
		} else {
			alert("Form has errors.");
		}
	}

	handleChange(field, e) {
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({ fields });
	}

	render() {
		return (
			<div>
				<form name='contactform' onSubmit={this.contactSubmit.bind(this)}>
					<div>
						<input
							ref='name'
							type='text'
							size='30'
							placeholder='Name'
							onChange={this.handleChange.bind(this, "name")}
							value={this.state.fields["name"]}
						/>
						<span className='errortext'>{this.state.errors["name"]}</span>
						<br />
						<input
							refs='email'
							type='text'
							size='30'
							placeholder='Email'
							onChange={this.handleChange.bind(this, "email")}
							value={this.state.fields["email"]}
						/>
						<span className='errortext'>{this.state.errors["email"]}</span>
						<br />
					</div>
					<div>
						<textarea
							refs='message'
							cols='28'
							rows='5'
							placeholder='Message'
							onChange={this.handleChange.bind(this, "message")}
						>
							{this.state.fields["message"]}
						</textarea>
					</div>
					<div>
						<button id='submit' value='Submit'>
							Send Message
						</button>
					</div>
				</form>
			</div>
		);
	}
}

ReactDOM.render(<Form />, document.querySelector("#root"));

export default <Form></Form>;

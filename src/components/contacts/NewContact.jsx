import React from "react";
import { useState } from "react";

const NewContact = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setMail] = useState("");

	const createContact = (e) => {
		e.preventDefault();
		console.log(name, phone, mail);
	};

	return (
		<div className="card border-0 shadow">
			<div className="card-header">Add a Contact</div>
			<div className="card-body">
				<form onSubmit={(e) => createContact(e)}>
					<div className="form-group">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							type="text"
							className="form-control"
							placeholder="Enter your Name"
						/>
					</div>
					<div className="form-group">
						<input
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							type="number"
							className="form-control"
							placeholder="Enter your Phone Number"
						/>
					</div>
					<div className="form-group">
						<input
							value={mail}
							onChange={(e) => setMail(e.target.value)}
							type="email"
							className="form-control"
							placeholder="Enter your Email"
						/>
					</div>
					<button className="btn btn-primary" type="submit">
						Create Contact
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewContact;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const NewContact = () => {
	let history = useHistory();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();

	const createContact = (e) => {
		e.preventDefault();
		const new_contact = {
			id: shortid.generate(),
			name,
			phone,
			email,
		};
		dispatch(addContact(new_contact));
		history.push("/");
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
							value={email}
							onChange={(e) => setEmail(e.target.value)}
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

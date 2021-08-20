import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, getContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditContact = () => {
	let { id } = useParams();
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [mail, setMail] = useState("");
	const dispatch = useDispatch();
	const contact = useSelector((state) => state.firstReducer.singleContact);

	useEffect(() => {
		if (contact != null) {
			setName(contact.name);
			setMail(contact.mail);
			setPhone(contact.phone);
		}
		dispatch(getContact(id));
	}, [contact]);

	return (
		<div className="card border-0 shadow">
			<div className="card-header">Add a Contact</div>
			<div className="card-body">
				<form>
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
					<button className="btn btn-warning" type="submit">
						Update Contact
					</button>
				</form>
			</div>
		</div>
	);
};

export default EditContact;

import React from "react";
import Avatar from "react-avatar";

const Contact = ({ contact }) => {
	const { name, phone, email } = contact;
	return (
		<tr>
			<td>
				<div className="custom-control custom-checkbox">
					<input type="checkbox" className="custom-control-input" />
					<label className="custom-control-label"></label>
				</div>
			</td>
			<td>
				{" "}
				<Avatar name={name} className="mr-2" size="30" round /> {name}
			</td>
			<td>{phone}</td>
			<td>{email}</td>
			<td className="actions">
				<a href="#">
					<span className="material-icons mr-2">edit</span>
				</a>
				<a href="#">
					<span className="material-icons text-danger">remove_circle</span>
				</a>
			</td>
		</tr>
	);
};

export default Contact;

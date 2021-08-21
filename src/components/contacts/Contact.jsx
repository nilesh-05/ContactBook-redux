import React from "react";
import Avatar from "react-avatar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";

const Contact = ({ contact, selectAll }) => {
	const dispatch = useDispatch();
	const { name, phone, email, id } = contact;
	return (
		<tr>
			<td>
				<div className="custom-control custom-checkbox">
					<input
						type="checkbox"
						className="custom-control-input"
						checked={selectAll}
					/>
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
				<Link to={`/edit/${id}`}>
					<span className="material-icons mr-2">edit</span>
				</Link>
				<span
					style={{ cursor: "pointer" }}
					onClick={() => dispatch(deleteContact(id))}
					className="material-icons text-danger"
				>
					remove_circle
				</span>
			</td>
		</tr>
	);
};

export default Contact;

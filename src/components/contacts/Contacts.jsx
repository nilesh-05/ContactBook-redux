import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	clearAllContacts,
	selectAllContacts,
} from "../../actions/contactAction";
import Contact from "./Contact";

const Contacts = () => {
	const [selectAll, setSelectAll] = useState(false);
	const contacts = useSelector((state) => state.firstReducer.contacts);
	let dispatch = useDispatch();

	useEffect(() => {
		if (selectAll) {
			dispatch(selectAllContacts(contacts.map((contact) => contact.id)));
		} else {
			dispatch(clearAllContacts());
		}
	}, [selectAll]);
	return (
		<div>
			<table className="table shadow table-light">
				<thead>
					<tr>
						<th scope="col">
							<div className="custom-control custom-checkbox">
								<input
									type="checkbox"
									className="custom-control-input"
									id="selectAll"
									value={selectAll}
									onClick={() => setSelectAll(!selectAll)}
								/>
								<label
									className="custom-control-label"
									htmlFor="selectAll"
								></label>
							</div>
						</th>
						<th>Name</th>
						<th>Phone Number</th>
						<th>Email</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{contacts.map((contact) => (
						<Contact contact={contact} key={contact.id} selectAll={selectAll} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Contacts;

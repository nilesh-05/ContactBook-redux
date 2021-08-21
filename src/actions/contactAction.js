//actions

import {
	CREATE_CONTACT,
	GET_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
	SELECT_CONTACT,
	CLEAR_CONTACT,
	DELETE_SELECTED,
} from "../constants/types";

export const addContact = (contact) => {
	return {
		type: CREATE_CONTACT,
		payload: contact,
	};
};

export const getContact = (id) => ({
	type: GET_CONTACT,
	payload: id,
});

export const updateContact = (contact) => ({
	type: UPDATE_CONTACT,
	payload: contact,
});

export const deleteContact = (id) => ({
	type: DELETE_CONTACT,
	payload: id,
});

export const selectAllContacts = (id) => ({
	type: SELECT_CONTACT,
	payload: id,
});

export const clearAllContacts = () => ({
	type: CLEAR_CONTACT,
});

export const deleteSelectedContacts = () => ({
	type: DELETE_SELECTED,
});

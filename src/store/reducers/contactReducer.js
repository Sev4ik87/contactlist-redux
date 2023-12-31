// src/reducers/contactReducer.js

import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  contacts: [],
  contactForEdit: createEmptyContact(),
};

export default function contactReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ACTION_TYPES.ADD_NEW_CONTACT:
      return { ...state, contactForEdit: createEmptyContact() };
    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
        contactForEdit: createEmptyContact(),
      };
    case ACTION_TYPES.PUT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id !== payload.id ? contact : payload
        ),contactForEdit: createEmptyContact(),

      };
    case ACTION_TYPES.POST_NEW_CONTACT:
      return { ...state, contacts: [...state.contacts, payload],
        contactForEdit: createEmptyContact(),
      };
    case ACTION_TYPES.SELECT_CONTACT:
      return { ...state, contactForEdit: payload };
    case ACTION_TYPES.GET_CONTACTS:
      return { ...state, contacts: payload };

    default:
      return state;
  }
}

function createEmptyContact() {
  return {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
}

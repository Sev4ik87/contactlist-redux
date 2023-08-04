// src/reducers/contactReducer.js

import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
	contacts: [],
  contactForEdit: null,
};



const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ACTION_TYPES.SET_CONTACT_FOR_EDIT:
      return { ...state, contactForEdit: action.payload };
    case ACTION_TYPES.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case ACTION_TYPES.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact
        ),
      };
    case ACTION_TYPES.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export default contactReducer;

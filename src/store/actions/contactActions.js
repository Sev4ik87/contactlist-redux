// src/actions/contactActions.js
import api from '../../contact-service';
import ACTION_TYPES from './actionTypes';

export const loadContacts = () => {
  return (dispatch) => {
    api.get('/')
      .then(({ data }) => {
        dispatch(setContacts(data));
      })
      .catch(error => {
      });
  };
};

export const setContacts = (contacts) => {
  return {
  type: ACTION_TYPES.SET_CONTACTS,
  payload: contacts }
};

export const addContact = (contact) => {
  return (dispatch) => {
    api.post('/', contact)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.ADD_CONTACT,
          payload: response.data
        });
      })
      .catch(error => {
      });
  };
};

export const updateContact = (contact) => {
  return (dispatch) => {
    api.put(`/${contact.id}`, contact)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.UPDATE_CONTACT,
          payload: response.data
        });
      })
      .catch(error => {
      });
  };
};

export const deleteContact = (id) => {
  return (dispatch) => {
    api.delete(`/${id}`)
      .then(response => {
        dispatch({
          type: ACTION_TYPES.DELETE_CONTACT,
          payload: id
        });
      })
      .catch(error => {
      });
  };
};

export const setContactForEdit = (contact) => {
  return {
    type: ACTION_TYPES.SET_CONTACT_FOR_EDIT,
    payload: contact,
  };
};

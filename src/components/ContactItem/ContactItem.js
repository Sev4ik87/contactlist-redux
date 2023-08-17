import React from 'react';
import './ContactItem.css';
import {useDispatch} from 'react-redux';
import {
  deleteContact,
  selectContact,
} from '../../store/actions/contactActions'
import API from '../../contact-service';

function ContactItem ({ contact}) {
const dispatch = useDispatch();

  const onItemDelete = () => {
    API.delete(`/${contact.id}`).then(({status})=>
   console.log(status));
    dispatch(deleteContact(contact.id));
  };

  const onContactEdit = (e) => {
    e.stopPropagation()
dispatch(selectContact(contact))  
};

  return (
    <div className='contact-item'>
      <p className='content' onDoubleClick={onContactEdit}>
        {contact.firstName} {contact.lastName}
      </p>
      <span className='delete-btn' onClick={onItemDelete}>
        X
      </span>
    </div>
  );
};

export default ContactItem;

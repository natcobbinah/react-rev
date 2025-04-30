import React from "react";
import { getAllContacts } from "../Data";
import { NavLink, Outlet } from "react-router-dom";

const Contacts = () => {
  let contactData = getAllContacts();

  return (
    <div className="contacts">
      <h1 className="title">All Contacts</h1>
      <ul className="contact-list">
        {contactData.map((contact) => {
          return (
            <li key={contact.id} className="contact-list-item">
              <NavLink to={`./${contact.id}`}>
                {contact.name}
              </NavLink>
              <br />
            </li>
          );
        })}
      </ul>
      <Outlet/>
    </div>
  );
};

export default Contacts;
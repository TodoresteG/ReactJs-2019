import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import contactsData from "./data/contacts.json";

const header = <header>&#9993; Contact Book</header>
const footer = <footer>Contact Book SPA &copy; 2019</footer>
let currentContact = contactsData[0];

function updateContactDetails(contact) {
    currentContact = contact;
    ReactDOM.render(App(), document.getElementById('root'));
}

function contactView(contact) {
    return (
        <div className="contact" key={contact.email} onClick={() => updateContactDetails(contact)}>
            <span className="avatar small">&#9787;</span>
            <span className="title">{contact.firstName} {contact.lastName}</span>
        </div>
    );
}

function contactDetailsView(contact) {
    if (!contact) {
        return;
    }

    return (
        <div className="content">
            <div className="info">
                <div className="col">
                    <span className="avatar">&#9787;</span>
                </div>
                <div className="col">
                    <span className="name">{contact.firstName}</span>
                    <span className="name">{contact.lastName}</span>
                </div>
                <div className="info">
                    <span className="info-line">&phone; {contact.phone}</span>
                    <span className="info-line">&#9993; {contact.email}</span>
                </div>
            </div>
        </div>
    );
}

function App() {
    const contactListView = contactsData.map(contact => contactView(contact));

    return (
        <div className="container">
            {header}
            <div id="book">
                <div id="list">
                    <h1>Contacts</h1>
                    <div className="content">{contactListView}</div>
                </div>
                <div id="details">
                    <h1>Details</h1>
                    {contactDetailsView(currentContact)}
                </div>
            </div>
            {footer}
        </div>
    );
}

export default App;

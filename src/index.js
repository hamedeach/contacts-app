import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// my code 

class Contacts extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'hello' },
      this.createHeader('Contacts List :'),
      this.createList('Family Contacts', this.familyContactsList)
    );
  }
  familyContactsList = [
    {
      name: 'Seif Hamed',
      id: 1,
      mobile: '0100011112013'

    },

    {
      name: 'Dalida Hamed',
      id: 2,
      mobile: '0100023042021'

    },

    {
      name: 'Rehab Zein',
      id: 3,
      mobile: '0100030091987'

    }

  ];

  createHeader(txt) {
    return React.createElement('h1', null, txt);
  }
  createList(listname, contactlist) {
    return <ol>
      <h2>{listname}</h2>
      {
        contactlist.map((contact) => (
          console.log(contact.name),
          React.createElement(
            'li',
            { key: contact.id },
            <h3>{contact.name}</h3>,
            <ul>Mobile
              <li>{contact.mobile}</li>
            </ul>,

          )
        ))
      }
    </ol>



  }
}


///////////////////////

root.render(
  //<App />
  <React.StrictMode>
    <Contacts />
    <div>{ }</div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

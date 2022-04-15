import React from 'react';

class ContactsHeadr extends React.Component{
  createHeader(txt) {
    return React.createElement('h1', null, txt);
  }

  render(){return this.createHeader('My Contacts :');
    
  }

}


class Contacts extends React.Component {

 
  createList(listname, contactlist) {
    return <ol>
      <h2>{listname}</h2>
      {
        contactlist.map((contact) => (
          React.createElement(
            'li',
            { key: contact.id },
            <strong>{contact.name}</strong>,
            <ul>Mobile
              <li>{contact.mobile}</li>
            </ul>,

          )
        ))
      }
      <br></br>
    </ol>


  }

  render() {
    const name = this.props.com_listname;
    const list = this.props.com_contactlist;
  
    return React.createElement(
      'div',
      { className: 'hello' },      
      this.createList(name, list)
    );

  }



}
const  familyContactsList = [
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
]

const  workContactsList = [
  {
    name: 'Mostafa Ghandour',
    id: 1,
    mobile: '01010101010101'

  },

  {
    name: 'Ahmed Hosny',
    id: 2,
    mobile: '012012012012012'

  },

  {
    name: 'Khaled Yossef',
    id: 3,
    mobile: '011011011011011'

  }

]


function App() {
  return (
    <div className="App">
      <ContactsHeadr></ContactsHeadr>
      <Contacts com_listname={'Family'} com_contactlist={ familyContactsList}/>
      <Contacts com_listname={'Co-Work'} com_contactlist={workContactsList}/>
    </div>
  );
}


export default App;

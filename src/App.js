import React from "react";
import './App.css';

export default function App(){

  const [contact , setContact] = React.useState(
    {
      firstName:"Kevin",
      lastName: "Mugo",
      phone :"+254796811122",
      email :" mugokevin900@gmail.com",
      isFavourite: true
    })

    function toggleFavourite(){
       setContact(prevState => (
        {
          ...prevState,
          isFavourite: !prevState.isFavourite
        }
       ))
    }
  

  return( 
    <main>
      <article className="card">
        <img alt="" src="./user.png" className="card--img"/>
        <div className="card--info">
          <img alt="" src={contact.isFavourite ?"./star.png": "./empty.png" }className="card--favourite" onClick={toggleFavourite}/>
          <h2>{contact.firstName  } {contact.lastName}</h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  );
};
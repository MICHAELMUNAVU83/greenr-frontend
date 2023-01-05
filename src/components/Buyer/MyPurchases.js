import React from "react";
import './MyPurchases.css';

function MyPurchases(props) {
 
  return (
    <>
    {props.purchases.map((items) => (
     <div className="card">
      <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
      alt="image"/>
         key={items.id}
       <p>{items.buyer_location}</p>
      <p>{items.buyer_phone_number}</p> 
    </div>
   ))}
      
    </>
     
       );  
}

export default MyPurchases;

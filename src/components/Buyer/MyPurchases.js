import React, { useState, useEffect } from "react";
import './MyPurchases.css';

function MyPurchases({ loggedInUserId }, props) {
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/my_purchases/${loggedInUserId}`, {
      method: "GET",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPurchases(data);
      });
  }, []);

  return (
    <>
    {props.purchasesCard.map((item) => (
     <div className="card">
      <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
      alt="image"/>
         key={item.id}
       <p>{item.buyer_location}</p>
      <p>{item.buyer_phone_number}</p> 
    </div>
   ))}
      
    </>
     
       );  
}

export default MyPurchases;

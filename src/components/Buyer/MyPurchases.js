import React, { useState, useEffect } from "react";
import './MyPurchases.css';

function MyPurchases({ loggedInUserId }) {
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
    { const carbon = purchases.map((item) => (
      <div className="mypurchases">
      <div className="card">
     
      <img src="https://images.unsplash.com/photo-1503785640985-f62e3aeee448?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80"
       alt="image"/>
       {item.buyer_location}
       {item.buyer_phone_number}
      </div>
   
   </div>
    ))}
    </>

       );  
}

export default MyPurchases;

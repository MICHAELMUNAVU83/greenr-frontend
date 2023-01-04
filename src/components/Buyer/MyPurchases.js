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
    <div className="mypurchases">

    MyPurchases

   </div>
  );  
}

export default MyPurchases;

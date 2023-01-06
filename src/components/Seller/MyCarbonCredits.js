import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function MyCarbonCredits({ loggedInUserId }) {
  const [carbonCredits, setCarbonCredits] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/my_carbon_credits/${loggedInUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarbonCredits(data);
      });
  }, []);
  return <div>
     <p className="title">My Carbon Credits</p>
  </div>;
}

export default MyCarbonCredits;

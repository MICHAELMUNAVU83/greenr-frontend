import React, { useState, useEffect } from "react";

function MyCarbonCredits({ loggedInUserId }) {
  const [carbonCredits, setCarbonCredits] = useState([]);
  useEffect(() => {
    fetch(`/api/v1/my_carbon_credits/${loggedInUserId}`)
      .then((res) => res.json())
      .then((data) => {
        setCarbonCredits(data);
      });
  }, []);
  return <div>MyCarbonCredits</div>;
}

export default MyCarbonCredits;

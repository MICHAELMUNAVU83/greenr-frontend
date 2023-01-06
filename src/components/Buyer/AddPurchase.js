import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './AddPurchase.css'

function AddPurchase({loggedInUserId}) {
    const [carbonToBePurchased, setCarbonToBePurchased] = useState([]);
    const[buyerNumber,setBuyerNumber]= useState([]);
    const[location,setLocation]= useState([]);
    const {id} = useParams();

    function handleSubmit(e) {
      e.preventDefault();
        fetch(`/api/v1/carbon_credits/${id}`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          buyer_phone_number:buyerNumber,
          buyer_location:location
  
        }),
      })
          .then((res) => res.json())
          .then((data) => {
            setCarbonToBePurchased(data);
          });
      }

  return (<>
  <p className="title">Purchase Carbon Credit</p>
    <div className='signup-form2'>
        <>
        <p>Your have opted to purchase from {carbonToBePurchased.source} <Link className='linkstyle'>10,000 trees planted on 
        2 acres of land. Offsetting {carbonToBePurchased.amount} of Co2</Link> at <b>${carbonToBePurchased.price}</b>. 
        Complete the details below and Checkout to finish the 
        transaction.
        </p>
        </>
        <form onSubmit={handleSubmit}>
        <label>
          Your Phone Number
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="eg 254712345678"
            value={buyerNumber}
            onChange={(e) => setBuyerNumber(e.target.value)}
          />
        <label>
          Your Location
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="eg Nairobi Kenya"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />      
        <button className="signup-button">Checkout</button>
      </form>
    </div>
    </>
  )
}

export default AddPurchase;
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './AddPurchase.css'

function AddPurchase() {
    const [carbonToBePurchased, setCarbonToBePurchased] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        fetch(`/api/v1/carbon_credits/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setCarbonToBePurchased(data);
          });
      }, []);
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
        <form>
        <label>
          Your Phone Number
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="eg 254712345678"
          />
        <label>
          Your Location
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="eg Nairobi Kenya"
          />      
        <button className="signup-button">Checkout</button>
      </form>
    </div>
    </>
  )
}

export default AddPurchase

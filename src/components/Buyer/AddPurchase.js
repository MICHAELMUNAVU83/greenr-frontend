import React from 'react'
import { Link } from 'react-router-dom'
import './AddPurchase.css'

function AddPurchase() {
  return (<>
  <p className="title">Purchase Carbon Credit</p>
    <div className='signup-form2'>
        <>
        <p>Your have opted to purchase <Link className='linkstyle'>10,000 trees planted on 
        2 acres of land. Offsetting 2T of Co2</Link> at <b>$10,000</b>. 
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
import React from 'react'

function AddPurchase() {
  return (<>
  <p className="title">Purchase Carbon Credit</p>
    <div className='signup-form'>
        
        <>
        <p>Your have opted to purchase <a>10,000 trees planted on 
        2 acres of land. Offsetting 2T of Co2</a>at <b>$10,000</b>. 
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
import React from 'react'

function NewCarbonCredit() {
  return (
    <div>
        <p className="title">Add New Carbon Project</p>
        <form className="signup-form">
            <p>Fill in the details below to add a new carbon project</p>
        <label>
          Source of carbon offset
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="eg Artificial forest with 1000 trees"
          />
        <label>
          Amount of carbon offset by the project
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="Amount in kgs of Co2"
          />
        <label>
          Price of carbon credits
        </label>
        <input
            type="text"
            className="form-control signup-input"
            placeholder="Amount in kgs of CO2"
          />
        <label>
          Project Image
          </label> 
          <button className='bg-lime-500'>
         Select file  
          </button>       
        <button className="signup-button">Submit</button>
      </form>
    </div>
  )
}

export default NewCarbonCredit
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  amount: "",
  image: "",
  price: "",
  source: "",
};

function NewCarbonCredit({ loggedInUserId }) {
  const [formData, setFormData] = useState("initialState");
  const [image, setImage] = useState('')
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initialState);
  }

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify (formData),
    })
    setFormData({
      amount:amount,
      image: image,
      price: price,
      source:source,
      user_id: {loggedInUserId} ,
  })
  navigate("/carboncredits")
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
      });
  };
  return (
    <div>
      <p className="title">Add New Carbon Project</p>
      <form className="signup-form1"  onSubmit={handleSubmit}>
        <p>Fill in the details below to add a new carbon project</p>
        <label>Source of carbon offset</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="eg Artificial forest with 1000 trees"
          value={formData.source}
          onChange={handleChange}
        />
        <label>Amount of carbon offset by the project</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in kgs of Co2"
          value={formData.amount}
          onChange={handleChange}
        />
        <label>Price of carbon credits</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in kgs of CO2"
          value={formData.price}
          onChange={handleChange}
        />
        <label>Project Image</label> <br />
        <input
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
          type="file"
          className="form-control signup-input"
          value={formData.image}
    
        />
        <button className="signup-button">Submit</button>
      </form>
    </div>
  );
}

export default NewCarbonCredit;

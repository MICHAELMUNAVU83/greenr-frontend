import React, { useState } from "react";

function NewCarbonCredit({ loggedInUserId }) {
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [source, setSource] = useState("");
  const [formData, setFormData] = useState("");
  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
    setFormData({
      amount: 'amount',
      image: 'image',
      price: 'price',
      source:'source',
      user_id: 'loggedInUserId ',
  })
  console.log(formData)
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
      });
  };
  return (
    <div>
      <p className="title">Add New Carbon Project</p>
      <form className="signup-form1">
        <p>Fill in the details below to add a new carbon project</p>
        <label>Source of carbon offset</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="eg Artificial forest with 1000 trees"
        />
        <label>Amount of carbon offset by the project</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in kgs of Co2"
        />
        <label>Price of carbon credits</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in kgs of CO2"
        />
        <label>Project Image</label> <br />
        <input
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
          type="file"
          className="form-control signup-input"
        />
        <button className="signup-button">Submit</button>
      </form>
    </div>
  );
}

export default NewCarbonCredit;

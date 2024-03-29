import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCarbonCredit({ loggedInUserId }) {
  const [image, setImage] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const [source, setSource] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "e2e6z2lx");
    fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
      });
  };

  const addACarbonCredit = (e) => {
    e.preventDefault();
    fetch("https://greenr-app-backend.herokuapp.com/api/v1/carbon_credits", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: image,
        amount: amount,
        price: price,
        source: source,
        location: location,
        user_id: loggedInUserId,
      }),
    });

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div>
      <p className="title">Add New Carbon Project</p>
      <form className="signup-form1">
        <p>Fill in the details below to add a new carbon project</p>
        <label>Project Image</label> <br />
        <input
          onChange={(e) => {
            uploadImage(e.target.files);
          }}
          type="file"
          className="form-control signup-input"
        />
        <label>Source of carbon offset</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="eg Artificial forest with 1000 trees"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
          }}
        />
        <label>Amount of carbon offset by the project</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in kgs of Co2"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <label>Price of carbon credits</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="Amount in Us Dollars"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <label>Location of the project</label>
        <input
          type="text"
          className="form-control signup-input"
          placeholder="eg. Nairobi, Kenya"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button className="signup-button" onClick={addACarbonCredit}>
          Submit for Approval
        </button>
      </form>
    </div>
  );
}

export default NewCarbonCredit;

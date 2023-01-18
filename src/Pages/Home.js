import React from "react";

function Home({ setStoredToken }) {
  return (
    <div className="container" style={{height:'83vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <p style={{textAlign:'center', fontSize:'35px'}}>
      <span style={{FontWeight:'700', display:'block', paddingBottom:'20px'}}>Welcome to Greenr! </span>Thank you for joining us at the forefront of the fight for our planet. You are logged into your account.
      </p>
      <button
        className="btn"

        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}

        style={{width:'max-content', outline: 'none', padding:' 10px 20px 10px', marginTop:'30px', backgroundColor:'green', color:'white', borderRadius:'0px'}}
      >
        Log out
      </button>

    </div>
  );
}

export default Home;

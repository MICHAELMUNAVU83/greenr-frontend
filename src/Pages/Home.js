import React from "react";

function Home({ setStoredToken }) {
  return (
    <div className="container" style={{height:'65vh'}}>
      <span style={{FontWeight:'700'}}>Welcome to Greenr!</span>Thank you for joining us at the forefront of the fight for our planet. You are logged into your account.
      <button
        onClick={() => {
          localStorage.setItem("token", "");
          setStoredToken("");
        }}
      >
        Log out
      </button>
    </div>
  );
}

export default Home;

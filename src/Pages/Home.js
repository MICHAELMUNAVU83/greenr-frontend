import React from "react";

function Home({ setStoredToken }) {
  return (
    <div>
      Home You will see this page if you are logged in
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

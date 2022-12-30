import React from "react";
import Footer from "../components/Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default Home;

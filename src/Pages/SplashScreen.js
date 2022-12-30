import React from "react";
import { Link } from "react-router-dom";

function SplashScreen() {
  return (
    <div>
      SplashScreen You will see this page if you are not logged in.
      add a new page and test
      <Link to="/signup">Sign up</Link>
      <Link to="/login">Log in</Link>
    </div>
  );
}

export default SplashScreen;

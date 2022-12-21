import React from "react";
import Signup from "./components/Signup";
import "./styles/App.css";

const App = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-teal-100">
      <Signup />
    </div>
  );
};

export default App;

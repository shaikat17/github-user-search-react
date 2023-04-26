import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Dashboard } from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <Outlet></Outlet>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;

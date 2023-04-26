
import "./App.css";
import { Outlet } from "react-router-dom";
import { Dashboard } from "./pages";

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Outlet></Outlet>
      <Dashboard></Dashboard>
    </>
  );
}

export default App;

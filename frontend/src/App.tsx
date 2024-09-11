import { useEffect } from "react";
import "./App.scss";
import { getAllEmployees } from "./services/employee-services";

function App() {
  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
    });
  }, []);
  return <>App</>;
}

export default App;

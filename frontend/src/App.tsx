import { useEffect } from "react";
import "./App.scss";
import { getAllEmployees } from "./services/employee-services";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";

function App() {
  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <EmployeeListPage />
    </>
  );
}

export default App;

import { useEffect } from "react";
import "./App.scss";
import { getAllEmployees } from "./services/employee-services";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePageLoader from "./containers/EmployeePageLoader/EmployeePageLoader";

function App() {
  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeListPage />}></Route>
          <Route path="/employees/:id" element={<EmployeePageLoader />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

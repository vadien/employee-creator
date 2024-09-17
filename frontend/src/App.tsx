import { useEffect } from "react";
import "./App.scss";
import { getAllEmployees } from "./services/employee-services";
import EmployeeListPage from "./pages/EmployeeListPage/EmployeeListPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeePageLoader from "./containers/EmployeePageLoader/EmployeePageLoader";
import EmployeeForm from "./forms/EmployeeForm/EmployeeForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<EmployeeListPage />}></Route>
            <Route path="/employees/:id" element={<EmployeePageLoader />}></Route>
            <Route path="/employees/:id/edit" element={<EmployeeForm />}></Route>
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

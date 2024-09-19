import { Routes, Route } from "react-router-dom";
import EmployeePageLoader from "../../containers/EmployeePageLoader/EmployeePageLoader";
import EmployeeForm from "../../forms/EmployeeForm/EmployeeForm";
import EmployeeListPage from "../../pages/EmployeeListPage/EmployeeListPage";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { EmployeeFormData } from "../../forms/EmployeeForm/schema";
import { getAllEmployees, createEmployee } from "../../services/employee-services";

const EmployeeQueryHandler = () => {
  const queryClient = useQueryClient();
  const queryEmployees = useQuery({
    queryKey: ["employeeFetch"],
    queryFn: getAllEmployees,
  });

  useEffect(() => {
    getAllEmployees().then((data) => {
      console.log(data);
    });
  }, []);

  const onCreateSubmit = async (data: EmployeeFormData) => {
    console.log("Submitting form");
    // post request
    await createEmployee(data);
    // then refetch employees
  };

  const createMutation = useMutation({
    mutationFn: onCreateSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employeeFetch"] });
    },
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<EmployeeListPage />}></Route>
        <Route path="/employees/:id" element={<EmployeePageLoader />}></Route>
        {/* <Route path="/employees/:id/edit" element={<EmployeeForm />}></Route> */}
        <Route
          path="/employees/create"
          element={<EmployeeForm onSubmit={onCreateSubmit} />}
        ></Route>
      </Routes>
    </>
  );
};

export default EmployeeQueryHandler;

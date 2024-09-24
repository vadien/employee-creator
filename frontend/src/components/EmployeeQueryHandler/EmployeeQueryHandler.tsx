import { Routes, Route, useNavigate } from "react-router-dom";
import EmployeePageLoader from "../../containers/EmployeePageLoader/EmployeePageLoader";
import EmployeeForm from "../../forms/EmployeeForm/EmployeeForm";
import EmployeeListPage from "../../pages/EmployeeListPage/EmployeeListPage";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { EmployeeFormData } from "../../forms/EmployeeForm/schema";
import {
  getAllEmployees,
  createEmployee,
  updateEmployee,
} from "../../services/employee-services";

const EmployeeQueryHandler = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const queryEmployees = useQuery({
    queryKey: ["employeeFetch"],
    queryFn: getAllEmployees,
  });

  const onCreateSubmit = async (data: EmployeeFormData) => {
    await createEmployee(data);
    navigate("/");
  };

  const onEditSubmit = async (data: EmployeeFormData, id: number) => {
    await updateEmployee(id, data);
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
        <Route
          path="/employees/:id/edit"
          element={<EmployeeForm onSubmit={onEditSubmit} />}
        ></Route>
        <Route
          path="/employees/create"
          element={<EmployeeForm onSubmit={onCreateSubmit} />}
        ></Route>
      </Routes>
    </>
  );
};

export default EmployeeQueryHandler;

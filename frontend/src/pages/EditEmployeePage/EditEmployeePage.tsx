import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../../services/employee-services";
import EmployeeForm from "../../forms/EmployeeForm/EmployeeForm";
import { EmployeeFormData } from "../../forms/EmployeeForm/schema";

const EditEmployeePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idNum = Number(id);
  const editSubmit = (empData: EmployeeFormData) => {
    updateEmployee(idNum, empData)
      .then(() => navigate(`/employees/${idNum}`))
      .catch((e: Error) => console.log(e));
  };
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["employees"],
    queryFn: () => getEmployeeById(idNum),
  });

  if (isPending) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <EmployeeForm onSubmit={editSubmit} formType="EDIT" defaultValues={data} />
    </div>
  );
};

export default EditEmployeePage;

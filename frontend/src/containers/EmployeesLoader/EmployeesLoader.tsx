import { useEffect, useState } from "react";
import {
  EmployeeResponse,
  getAllEmployees,
} from "../../services/employee-services";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";

const EmployeesLoader = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);

  useEffect(() => {
    getAllEmployees()
      .then((data) => setEmployees(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      EmployeesLoader
      {employees &&
        employees.map((em) => <EmployeeCard key={em.id} employee={em} />)}
    </div>
  );
};

export default EmployeesLoader;

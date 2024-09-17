import { useEffect, useState } from "react";
import {
  deleteEmployee,
  EmployeeResponse,
  getAllEmployees,
} from "../../services/employee-services";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EmployeesLoader = () => {
  const [employees, setEmployees] = useState<EmployeeResponse[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const queryClient = useQueryClient();

  const queryEmployees = useQuery({
    queryKey: ["employeeFetch"],
    queryFn: getAllEmployees,
  });

  // useEffect(() => {
  //   getAllEmployees()
  //     .then((data) => setEmployees(data))
  //     .catch((e) => console.log(e));
  // }, []);

  const onRemove = async (id: number) => {
    if (confirm("Are you sure you want to delete this employee record?")) {
      const deleteSuccess = await deleteEmployee(id)
        .then(() => {
          return true;
        })
        .catch((e) => {
          setError(e);
          return false;
        });
      // if (deleteSuccess) {
      //   const updatedEmployees = employees.filter((em) => em.id !== id);
      //   setEmployees(updatedEmployees);
      // }
    }
  };

  const removeMutation = useMutation({
    mutationFn: onRemove,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["employeeFetch"] });
    },
  });

  return (
    <div>
      EmployeesLoader
      {/* {employees &&
        employees.map((em) => (
          <EmployeeCard key={em.id} employee={em} onRemove={onRemove} />
        ))} */}
      {queryEmployees.data?.map((em) => (
        <EmployeeCard key={em.id} employee={em} onRemove={removeMutation.mutate} />
      ))}
    </div>
  );
};

export default EmployeesLoader;

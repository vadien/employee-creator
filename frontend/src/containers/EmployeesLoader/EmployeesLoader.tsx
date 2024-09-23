import { useState } from "react";
import { deleteEmployee, getAllEmployees } from "../../services/employee-services";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const EmployeesLoader = () => {
  const [error, setError] = useState<Error | null>(null);
  const queryClient = useQueryClient();

  const queryEmployees = useQuery({
    queryKey: ["employeeFetch"],
    queryFn: getAllEmployees,
  });

  const onRemove = async (id: number) => {
    if (!confirm("Are you sure you want to delete this employee record?")) {
      return;
    }
    await deleteEmployee(id).catch((e) => {
      setError(e);
    });
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

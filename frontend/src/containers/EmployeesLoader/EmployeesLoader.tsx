import { useEffect, useState } from "react";
import { deleteEmployee, getAllEmployees } from "../../services/employee-services";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import {
  setEmployees,
  setSortedEmployees,
} from "../../state/employees/employeesSlice";

const EmployeesLoader = () => {
  const [fetchError, setFetchError] = useState<Error | null>(null);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const employees = useSelector((state: RootState) => state.employees.employees);
  const sortedEmployees = useSelector(
    (state: RootState) => state.employees.sortedEmployees
  );
  const isSorted = useSelector((state: RootState) => state.employees.isSorted);

  const { data, error, isLoading } = useQuery({
    queryKey: ["employeeFetch"],
    queryFn: getAllEmployees,
  });

  useEffect(() => {
    if (data) {
      dispatch(setEmployees(data));
      dispatch(setSortedEmployees(data));
    }
  }, [data, dispatch]);

  const onRemove = async (id: number) => {
    if (!confirm("Are you sure you want to delete this employee record?")) {
      return;
    }
    await deleteEmployee(id).catch((e) => {
      setFetchError(e);
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
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {fetchError && <div>Error: {fetchError.message}</div>}
      {!isSorted &&
        data?.map((em) => (
          <EmployeeCard key={em.id} employee={em} onRemove={removeMutation.mutate} />
        ))}
      {isSorted &&
        sortedEmployees.map((em) => (
          <EmployeeCard key={em.id} employee={em} onRemove={removeMutation.mutate} />
        ))}
    </div>
  );
};

export default EmployeesLoader;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  EmployeeResponse,
  getEmployeeById,
} from "../../services/employee-services";
import EmployeePage from "../../pages/EmployeePage/EmployeePage";

type fetchStatus = "IDLE" | "LOADING" | "FAILED" | "SUCCESS";

const EmployeePageLoader = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState<EmployeeResponse | null>(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState<fetchStatus>("IDLE");
  const idNum = Number(id);

  useEffect(() => {
    getEmployeeById(idNum)
      .then((data) => {
        setEmployee(data);
        setFetchStatus("SUCCESS");
      })
      .catch((e) => {
        setError(e);
        setFetchStatus("FAILED");
      });
  });
  return (
    <div>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "FAILED" && <p>{error}</p>}
      {fetchStatus === "SUCCESS" && employee && (
        <EmployeePage employee={employee} />
      )}
    </div>
  );
};

export default EmployeePageLoader;

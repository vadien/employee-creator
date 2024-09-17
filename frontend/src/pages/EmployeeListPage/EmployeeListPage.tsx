import { Link } from "react-router-dom";
import EmployeesLoader from "../../containers/EmployeesLoader/EmployeesLoader";

const EmployeeListPage = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <Link to={`employees/create`}>New Employee</Link>
      <EmployeesLoader />
    </div>
  );
};

export default EmployeeListPage;

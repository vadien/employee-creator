import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import EmployeesLoader from "../../containers/EmployeesLoader/EmployeesLoader";

const EmployeeListPage = () => {
  return (
    <div>
      <h1>Employee List</h1>
      <button>New Employee</button>
      <EmployeesLoader />
    </div>
  );
};

export default EmployeeListPage;

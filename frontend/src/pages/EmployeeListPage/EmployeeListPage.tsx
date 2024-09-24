import { Link } from "react-router-dom";
import EmployeesLoader from "../../containers/EmployeesLoader/EmployeesLoader";
import styles from "./EmployeeListPage.module.scss";

const EmployeeListPage = () => {
  return (
    <div className={styles.EmployeeListPage}>
      <h1>Employee List</h1>
      <Link to={`employees/create`} className={styles.createBtn}>
        New Employee
      </Link>
      <EmployeesLoader />
    </div>
  );
};

export default EmployeeListPage;

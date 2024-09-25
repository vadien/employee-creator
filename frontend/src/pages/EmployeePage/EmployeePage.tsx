import { useDispatch, useSelector } from "react-redux";
import { EmployeeResponse } from "../../services/employee-services";
import styles from "./EmployeePage.module.scss";
import { RootState } from "../../state/store";
import { toggle } from "../../state/darkmode/darkModeSlice";
import { Link, useNavigate } from "react-router-dom";

interface EmployeePage {
  employee: EmployeeResponse;
}

const EmployeePage = ({ employee }: EmployeePage) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.EmployeePage} ${
        darkMode ? styles.pageDark : styles.pageLight
      }`}
    >
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            darkMode ? styles.btnDark : styles.btnLight
          }`}
          onClick={() => navigate("/")}
        >
          Back to list
        </button>
        <Link
          to={`edit`}
          className={`${styles.button} ${
            darkMode ? styles.btnDark : styles.btnLight
          }`}
        >
          Edit info
        </Link>
        <button
          className={`${styles.button} ${
            darkMode ? styles.btnDark : styles.btnLight
          }`}
          onClick={() => dispatch(toggle())}
        >
          Dark Mode
        </button>
      </div>
      <div className={styles.name}>
        {employee.firstName} {employee.middleNames} {employee.lastName}
      </div>
      <div className={employee.currentEmployee ? "" : styles.error}>
        {employee.currentEmployee ? "Current Employee" : "Former Employee"}
      </div>
      <div>
        <div className={styles.groupHeader}>Contact Information:</div>
        <div>
          <span className={styles.header}>Address: </span>
          {employee.address}
        </div>
        <div>
          <span className={styles.header}>Email: </span>
          {employee.email}
        </div>
        <div>
          <span className={styles.header}>Mobile: </span>
          {employee.mobileNumber}
        </div>
      </div>
      <div>
        <span className={styles.header}>Start Date: </span>
        {employee.startDate.substring(0, 10)}
      </div>
      {!employee.currentEmployee && employee.endDate && (
        <div>
          <span className={styles.header}>Finish Date: </span>
          {employee.endDate.substring(0, 10)}
        </div>
      )}
      {!employee.currentEmployee && !employee.endDate && (
        <div className={styles.error}>
          Termination date not found! Add using the edit button above.
        </div>
      )}
    </div>
  );
};

export default EmployeePage;

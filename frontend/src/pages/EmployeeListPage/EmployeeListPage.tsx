import { Link } from "react-router-dom";
import EmployeesLoader from "../../containers/EmployeesLoader/EmployeesLoader";
import styles from "./EmployeeListPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/darkmode/darkModeSlice";

const EmployeeListPage = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles.EmployeeListPage} ${
        darkMode ? styles.pageDark : styles.pageLight
      }`}
    >
      <h1>Employee List</h1>
      <div className={styles.buttons}>
        <Link
          to={`employees/create`}
          className={`${styles.button} ${
            darkMode ? styles.btnDark : styles.btnLight
          }`}
        >
          New Employee
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
      <EmployeesLoader />
    </div>
  );
};

export default EmployeeListPage;

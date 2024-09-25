import { Link } from "react-router-dom";
import EmployeesLoader from "../../containers/EmployeesLoader/EmployeesLoader";
import styles from "./EmployeeListPage.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../state/store";
import { toggle } from "../../state/darkmode/darkModeSlice";
import { sortByLastName, unsetIsSorted } from "../../state/employees/employeesSlice";
import { useQueryClient } from "@tanstack/react-query";

const EmployeeListPage = () => {
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  const isSorted = useSelector((state: RootState) => state.employees.isSorted);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handleSortBtnClick = () => {
    if (!isSorted) {
      dispatch(sortByLastName());
    } else {
      queryClient.invalidateQueries({ queryKey: ["employeeFetch"] });
      dispatch(unsetIsSorted());
    }
  };

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
            isSorted ? styles.btnLight : styles.inactiveBtn
          }`}
          onClick={() => handleSortBtnClick()}
        >
          Sort by Name
        </button>
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

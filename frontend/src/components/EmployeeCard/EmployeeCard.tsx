import { Link } from "react-router-dom";
import { EmployeeResponse } from "../../services/employee-services";
import styles from "./EmployeeCard.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";

interface EmployeeCard {
  employee: EmployeeResponse;
  onRemove: (id: number) => void;
}

const EmployeeCard = ({ employee, onRemove }: EmployeeCard) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);
  return (
    <div className={`${styles.EmployeeCard} ${darkMode ? styles.cardDark : ""}`}>
      <div className={styles.employeeInfo}>
        <div className={styles.employeeName}>
          {employee.lastName}, {employee.firstName} -{" "}
          {!employee.currentEmployee ? "Former employee" : employee.contractType}
        </div>
        <div className={darkMode ? styles.detailsDark : styles.detailsLight}>
          {employee.mobileNumber} | {employee.email}
        </div>
      </div>
      <div className={styles.links}>
        <Link to={`/employees/${employee.id}`}>View</Link> |{" "}
        {/* <Link to={`employees/${employee.id}/edit`}>Edit</Link> |{" "} */}
        <button
          className={darkMode ? styles.deleteBtnDark : styles.deleteBtn}
          onClick={() => onRemove(employee.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;

import { Link } from "react-router-dom";
import { EmployeeResponse } from "../../services/employee-services";
import styles from "./EmployeeCard.module.scss";

interface EmployeeCard {
  employee: EmployeeResponse;
  onRemove: (id: number) => void;
}

const EmployeeCard = ({ employee, onRemove }: EmployeeCard) => {
  return (
    <div className={styles.EmployeeCard}>
      <div className={styles.employeeInfo}>
        <div className={styles.employeeName}>
          {employee.lastName}, {employee.firstName} -{" "}
          {!employee.currentEmployee ? "Former employee" : employee.contractType}
        </div>
        <div className={styles.employeeDetails}>
          {employee.mobileNumber} | {employee.email}
        </div>
      </div>
      <div className={styles.links}>
        <Link to={`/employees/${employee.id}`}>View</Link> |{" "}
        {/* <Link to={`employees/${employee.id}/edit`}>Edit</Link> |{" "} */}
        <button className={styles.deleteBtn} onClick={() => onRemove(employee.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default EmployeeCard;

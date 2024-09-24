import { EmployeeResponse } from "../../services/employee-services";
import styles from "./EmployeePage.module.scss";

interface EmployeePage {
  employee: EmployeeResponse;
}

const EmployeePage = ({ employee }: EmployeePage) => {
  return (
    <div className={styles.EmployeePage}>
      <div className={styles.name}>
        {employee.firstName} {employee.middleNames} {employee.lastName}
      </div>
      <div className={employee.currentEmployee ? "" : styles.formerEmployee}>
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
        <div>Termination date not found</div>
      )}
    </div>
  );
};

export default EmployeePage;

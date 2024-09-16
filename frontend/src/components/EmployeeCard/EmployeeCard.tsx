import { EmployeeResponse } from "../../services/employee-services";
import styles from "./EmployeeCard.module.scss";

interface EmployeeCard {
  employee: EmployeeResponse;
}

const EmployeeCard = ({ employee }: EmployeeCard) => {
  return (
    <div className={styles.EmployeeCard}>
      <hr />
      <div>
        {employee.lastName}, {employee.firstName}
      </div>
      <div>
        {employee.mobileNumber} | {employee.email}
      </div>
      <div>View | Edit | Remove</div>
    </div>
  );
};

export default EmployeeCard;

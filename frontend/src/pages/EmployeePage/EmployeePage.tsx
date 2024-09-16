import { EmployeeResponse } from "../../services/employee-services";

interface EmployeePage {
  employee: EmployeeResponse;
}

const EmployeePage = ({ employee }: EmployeePage) => {
  return (
    <div>
      <div>
        {employee.firstName} {employee.middleNames} {employee.lastName}
      </div>
      <div>
        {employee.currentEmployee ? "Current Employee" : "Former Employee"}
      </div>
      <div>
        Contact Information:
        <div>Address:{employee.address}</div>
        <div>Email: {employee.email}</div>
        <div>Mobile: {employee.mobileNumber}</div>
      </div>
      <div>{employee.startDate}</div>
    </div>
  );
};

export default EmployeePage;

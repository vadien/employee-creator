import axios from "axios";
import { EmployeeFormData } from "../forms/EmployeeForm/schema";

const baseUrl = import.meta.env.VITE_APP_API_BASE_URL;

export interface EmployeeResponse {
  id: number;
  firstName: string;
  middleNames: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  address: string;
  contractType: string;
  startDate: string;
  currentEmployee: boolean;
}

// get all
export const getAllEmployees = async () => {
  const response = await axios.get(`${baseUrl}/employees`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch employees");
  }
  return (await response.data) as EmployeeResponse[];
};

// get one
export const getEmployeeById = async (id: number) => {
  const response = await axios.get(`${baseUrl}/employees/${id}`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch employee with id " + id);
  }
  return (await response.data) as EmployeeResponse;
};

// create
export const createEmployee = async (data: EmployeeFormData) => {
  const response = await axios.post(`${baseUrl}/employees`, {
    headers: { "Content-Type": "application/json" },
    data: data,
  });
  if (response.status !== 200) {
    throw new Error("Failed to create employee");
  }
  return (await response.data) as EmployeeResponse;
};

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
  endDate: string;
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
  const response = await axios.post(
    `${baseUrl}/employees`,
    {
      firstName: data.firstName,
      middleNames: data.middleNames,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobileNumber,
      address: data.address,
      contractType: data.contractType,
      startDate: data.startDate,
      currentEmployee: data.currentEmployee,
      endDate: data.endDate,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  if (response.status !== 201) {
    throw new Error("Failed to create employee");
  }
  return (await response.data) as EmployeeResponse;
};

export const updateEmployee = async (id: number, data: EmployeeFormData) => {
  const response = await axios.put(
    `${baseUrl}/employees/${id}/edit`,
    {
      firstName: data.firstName,
      middleNames: data.middleNames,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobileNumber,
      address: data.address,
      contractType: data.contractType,
      startDate: data.startDate,
      currentEmployee: data.currentEmployee,
      endDate: data.endDate,
    },
    { headers: { "Content-Type": "application/json" } }
  );
  if (response.status !== 200) {
    throw new Error("Failed to update employee");
  }
  return (await response.data) as EmployeeResponse;
};

// delete
export const deleteEmployee = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/employees/${id}`);
  if (response.status !== 200) {
    throw new Error("Failed to delete employee with id " + id);
  }
  return (await response.data) as EmployeeResponse;
};

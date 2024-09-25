import { createSlice } from "@reduxjs/toolkit";
import { EmployeeResponse } from "../../services/employee-services";

interface EmployeesState {
  employees: EmployeeResponse[];
  sortedEmployees: EmployeeResponse[];
  isSorted: boolean;
  loading: boolean;
  error: {};
}

const initialState: EmployeesState = {
  employees: [],
  sortedEmployees: [],
  isSorted: false,
  loading: false,
  error: {},
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      return { ...state, employees: action.payload };
    },
    setSortedEmployees: (state, action) => {
      return { ...state, sortedEmployees: action.payload };
    },
    sortByLastName: (state) => {
      const sortedEmployees = [...state.employees];
      sortedEmployees.sort((a, b) => {
        return a.lastName.localeCompare(b.lastName);
      });
      return { ...state, sortedEmployees, isSorted: true };
    },
    filterByCurrentEmployee: (state) => {
      const filteredEmployees = state.employees;
      filteredEmployees.filter((employee) => {
        return employee.currentEmployee;
      });
      return { ...state, sortedEmployees: filteredEmployees };
    },
    unsetIsSorted: (state) => {
      return { ...state, isSorted: false };
    },
  },
});

export const {
  setEmployees,
  setSortedEmployees,
  sortByLastName,
  filterByCurrentEmployee,
  unsetIsSorted,
} = employeesSlice.actions;

export default employeesSlice.reducer;

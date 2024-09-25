import { createSlice } from "@reduxjs/toolkit";
import { EmployeeResponse } from "../../services/employee-services";

interface FormState {
  employee: EmployeeResponse;
}

const initialState: FormState = {
  employee: {
    id: 0,
    firstName: "",
    middleNames: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    address: "",
    contractType: "",
    startDate: "",
    currentEmployee: false,
    endDate: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFormData } = formSlice.actions;

export default formSlice.reducer;

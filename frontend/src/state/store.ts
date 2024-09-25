import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkmode/darkModeSlice";
import formReducer from "./form/formSlice";
import employeesReducer from "./employees/employeesSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    form: formReducer,
    employees: employeesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

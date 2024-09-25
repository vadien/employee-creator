import { createSlice } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggle: (state) => {
      // createSlice allows you to write code that looks like it will mutate
      // state, even though it won't
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;

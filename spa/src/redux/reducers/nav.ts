import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    {
      farm: "Amethyst",
      accent: "purple",
    },
    {
      farm: "Emerald",
      accent: "Green",
    },
    {
      farm: "Sapphire",
      accent: "Blue",
    },
  ],
  activeTab: 0,
};

const navReducer = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveTab(state: any, action: any) {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = navReducer.actions;

export default navReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    {
      farm: "Amethyst",
      accent: "#987D7C",
    },
    {
      farm: "Emerald",
      accent: "#A09CB0",
    },
    {
      farm: "Sapphire",
      accent: "#A3B9C9",
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

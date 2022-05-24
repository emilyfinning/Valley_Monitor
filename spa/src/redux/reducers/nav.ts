import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    {
      farm: "New Farm",
      accent: "#987D7C",
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
    setTabs(state: any, action: any) {
      let tabs = [];
      console.log(action.payload);
      for (const farm of action.payload.farms) {
        tabs.push({
          id: farm.id,
          farm: farm.name,
          accent: farm.accent,
        });
      }
      state.tabs = tabs;
    },
  },
});

export const { setActiveTab, setTabs } = navReducer.actions;

export default navReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const seasons = ["Winter", "Spring", "Summer", "Fall"];

const initialState = {
  userEmail: "",
  season: "Spring",
  day: 1,
  showTimeModal: false,
};

const basicsReducer = createSlice({
  name: "basics",
  initialState,
  reducers: {
    setGameTime(state: any, action: any) {
      state.season = action.payload.season;
      state.day = action.payload.day;
    },
    incrementGameTime(state: any, action: any) {
      const nextSeason = seasons.indexOf(action.payload.season) + 1;
      state.season =
        state.day === 28
          ? seasons[nextSeason === 4 ? 0 : nextSeason]
          : state.season;
      state.day = state.day === 28 ? 1 : state.day + 1;
    },
    decrementGameTime(state: any, action: any) {
      const previousSeason = seasons.indexOf(action.payload.season) + -1;
      state.season =
        state.day === 1
          ? seasons[previousSeason === -1 ? 3 : previousSeason]
          : state.season;
      state.day = state.day === 1 ? 28 : state.day - 1;
    },
    toggleTimeModal(state: any, action: any) {
      state.showTimeModal = !state.showTimeModal;
    },
    setUserEmail(state: any, action: any) {
      state.userEmail = action.payload;
    },
  },
});

export const {
  setGameTime,
  incrementGameTime,
  decrementGameTime,
  toggleTimeModal,
  setUserEmail,
} = basicsReducer.actions;

export default basicsReducer.reducer;

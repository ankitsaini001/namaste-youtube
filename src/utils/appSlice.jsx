import { createSlice } from "@reduxjs/toolkit";

// Global UI state shared between Header (hamburger button) and SiderBar (visibility)
const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,  // sidebar is visible by default on load
    },
    reducers: {
        toggleEvent: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
});

export const { toggleEvent } = appSlice.actions;
export default appSlice.reducer;
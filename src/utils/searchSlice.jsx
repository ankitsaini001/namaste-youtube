import { createSlice } from "@reduxjs/toolkit";

const searchSlice  = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        searchSliceEvent: (state, action) => {
           Object.assign(state, action.payload);
        }
    }
});

export const {searchSliceEvent} = searchSlice.actions;
export default searchSlice.reducer;
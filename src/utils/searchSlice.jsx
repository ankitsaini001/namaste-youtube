import { createSlice } from "@reduxjs/toolkit";

// Stores search suggestions keyed by query string: { "react hooks": [...], "redux": [...] }
// Acts as an in-memory cache so repeated queries skip the network.
const searchSlice  = createSlice({
    name: "search",
    initialState: {

    },
    reducers: {
        // Object.assign merges the new { query: results } pair into the existing cache
        // without wiping out previously stored queries
        searchSliceEvent: (state, action) => {
           Object.assign(state, action.payload);
        }
    }
});

export const {searchSliceEvent} = searchSlice.actions;
export default searchSlice.reducer;
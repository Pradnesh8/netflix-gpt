import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false
    },
    reducers: {
        toggleShowGpt: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }
})

export const { toggleShowGpt } = gptSlice.actions;
export default gptSlice.reducer
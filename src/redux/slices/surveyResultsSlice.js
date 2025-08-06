import { createSlice } from "@reduxjs/toolkit";

const surveyResultsSlice = createSlice({
    name: 'surveyResults',
    initialState: [],
    reducers: {
        ADD_DATA: (state, { payload }) => {
            state.push(payload);
        },
        removeData: (state, action) => {
            const id = action.payload;
            return state.filter((_, index) => index !== id);
        }
    }
})

export const { ADD_DATA, removeData } = surveyResultsSlice.actions
export default surveyResultsSlice.reducer
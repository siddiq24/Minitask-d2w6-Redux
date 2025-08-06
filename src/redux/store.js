import { configureStore } from "@reduxjs/toolkit";
import surveyResultsReducer from "./slices/surveyResultsSlice";
import todosReducer from "./slices/TodoSlices";


export const store = configureStore({
    reducer: {
        surveyResults:surveyResultsReducer,
        todos: todosReducer
    }
})
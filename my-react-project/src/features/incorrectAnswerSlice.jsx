import { createSlice } from "@reduxjs/toolkit";

export const incorrectAnswersSlice = createSlice({
    name: "incorrectAnswers",
    initialState:[],
    reducers: {
        cacheIncorrectAnswers(state, action) {
            const value = action.payload
            return [ ...state, value ]
        }
    }
})

export const { cacheIncorrectAnswers } = incorrectAnswersSlice.actions

export default incorrectAnswersSlice.reducer;
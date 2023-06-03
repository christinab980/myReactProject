import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk('quiz', async() => {
    const apiKey = "w9Rvsy8CdKGevTtBTBwe0aGMiqhMO7sHiJx57y8Y"; 
    const response = await fetch(`https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10`)
    const data = await response.json()
    return data  
})


export const quizSlice = createSlice({
    name: "quiz",
    initialState:[],
    extraReducers(builder){
        builder.addCase(fetchData.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectQuizData = state => state.quizData;

export default quizSlice.reducer;
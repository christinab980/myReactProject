import { configureStore } from "@reduxjs/toolkit"
import quizReducer from "../features/quizSlice"
import incorrectAnswersReducer from "../features/incorrectAnswerSlice"

export default configureStore({
    reducer: {
        quizData: quizReducer,
        incorrects: incorrectAnswersReducer
    }
})
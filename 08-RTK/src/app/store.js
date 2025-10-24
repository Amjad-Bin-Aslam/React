import { configureStore } from '@reduxjs/toolkit'
import countReducer from '../Features/countTodo'

export const store = configureStore({
    reducer: countReducer
})
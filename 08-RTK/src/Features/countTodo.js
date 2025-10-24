import { createSlice } from "@reduxjs/toolkit";


export const countSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers : {
        incrementCount: (state,action) => {
            state.value += 1
        },
        decrementCount: (state , action) => {
            state.value -= 1
        },
        incrementByAmount: (state,action) => {
            state.value += action.payload
        },
        reset: (state, action) => {
            state.value = 0
        }
    }
})


export const { incrementByAmount, incrementCount , decrementCount, reset } = countSlice.actions

export default countSlice.reducer
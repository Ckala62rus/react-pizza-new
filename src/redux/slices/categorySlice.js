import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [],
}

export const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory: (state, payload) => {
            state.categories = payload.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    setCategory
} = categorySlice.actions

export default categorySlice.reducer
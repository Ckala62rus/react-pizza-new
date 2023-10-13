import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slices/filterSlice'
import categorySlice from "./slices/categorySlice";

export const store = configureStore({
    reducer: {
        counter: filterSlice,
        categories: categorySlice
    },
})

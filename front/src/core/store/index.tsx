import { configureStore } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import themeSlice from "../slices/theme-slice"

const store = configureStore({
    reducer: {
        theme: themeSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
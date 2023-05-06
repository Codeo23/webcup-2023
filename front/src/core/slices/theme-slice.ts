import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ThemeType } from "../types/theme-type";

const themeSlice = createSlice({
    name: "theme",
    initialState: {theme : "theme-dark"} as {theme: ThemeType},
    reducers: {
        toogleTheme(state, action: PayloadAction<ThemeType | undefined>) {
            if (state.theme === "theme-light") {
                state.theme = "theme-dark"
            }
            else {
                state.theme = "theme-light"
            }
        }
    }
})

export const { toogleTheme } = themeSlice.actions
export default themeSlice.reducer
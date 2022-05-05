import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "theme",
    initialState: {
        mode: "dark"
    },
    reducers: {
        toggleThemeMode: (store) => {
            store.mode = store.mode === "light" ? "dark" : "light"
        }
    }
})

export const {toggleThemeMode} = slice.actions
export default slice.reducer;

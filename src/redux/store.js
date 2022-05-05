import {configureStore} from "@reduxjs/toolkit";
import theme from './slice/themeSlice'

export default configureStore({
    reducer: {
        theme
    }
})

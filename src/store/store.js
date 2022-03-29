import { configureStore } from "@reduxjs/toolkit"
// import your reducers here 
//  so it can be recognised by store
import counterSlice from "./counterSlice"
export default configureStore({
    reducer: {
        counter: counterSlice
    },
})
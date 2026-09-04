import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from "./userSlice"
// configureStore creates the central Redux "store" — 
// this is the single place where all your app's global state lives
const appStore = configureStore({
    // "reducer" tells Redux which slices of state exist in your app.
    // Right now it's empty {} — meaning no state is registered yet.
    // Later, you'll add your userSlice here, like: { user: userReducer }
    reducer: {

        user:userReducer,
    }
})

// Export the store so it can be provided to your whole React app
// (usually wrapped around <App /> using <Provider store={appStore}>)
export default appStore;
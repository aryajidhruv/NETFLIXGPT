import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // default import — no curly braces

import moviesReducer from "./moviesSlice"

// configureStore creates the central Redux "store" — 
// this is the single place where all your app's global state lives
const appStore = configureStore({
    // "reducer" tells Redux which slices of state exist in your app.
    // Here we register the "user" slice, powered by userReducer
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})

// Export the store so it can be provided to your whole React app
// (usually wrapped around <App /> using <Provider store={appStore}>)
export default appStore;
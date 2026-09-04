import { createSlice } from "@reduxjs/toolkit";

// createSlice is a Redux Toolkit helper that bundles together:
// - a name for this slice of state
// - its initial value
// - the functions ("reducers") that can change that value
const userSlice = createSlice({
    // "name" identifies this slice — used internally by Redux 
    // and shows up in Redux DevTools as "user"
    name: "user",

    // "initialState" is the starting value of this slice before any action runs.
    // Here, it starts as null — meaning "no user is logged in yet"
    initialState: null,

    // "reducers" are functions that describe HOW the state changes.
    // Each one receives the current "state" and an "action" (the data being passed in)
    reducers: {
        // addUser: called when a user signs in — stores their data
        // "action.payload" is whatever data you pass in when calling this 
        // (e.g., the Firebase user object: { uid, email, displayName, etc. })
        addUser: (state, action) => {
            return action.payload; // replace the state with the user's data
        },

        // removeUser: called when a user signs out — clears their data
        removeUser: (state, action) => {
            return null; // reset the state back to "no user"
        }
    }
})

// createSlice automatically generates "action creators" for each reducer.
// Exporting these lets you call addUser(userData) or removeUser() 
// from anywhere in your app (e.g., inside your Login.js after successful sign in)
export const { addUser, removeUser } = userSlice.actions;

// Note: this line has a small bug — it should be userSlice.reducer (singular),
// not userSlice.reducers (plural). This exported reducer function is what 
// actually gets registered inside your appStore's "reducer" object.
export default userSlice.reducer;
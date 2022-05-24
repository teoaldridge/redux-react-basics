import { createSlice } from '@reduxjs/toolkit';

//here we set the initialAuthState 
const initialAuthState = {
    isAuthenticated: false
}

//We create a new Slice here
//Here we are SEEMINGLY ALLOWED to manipulate the methods in the reducer function
const authSlice = createSlice({
    name: 'authentication', 
    //here we set the initialState to initialAuthState
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer; 
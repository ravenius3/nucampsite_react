import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    currentUser: null
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            return ({
                ...state,
                currentUser: action.payload
            })
        }
    }
})

export const userReducer = userSlice.reducer;

export const { setCurrentUser } = userSlice.actions;

export const selectCurrrentUser = (state) => {
    return state.user.currentUser
};
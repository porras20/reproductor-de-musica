import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice(
    {
        name: "user",
        initialState: {
            user: null,
        },
        reducers: {
            SET_USER: (state, action) => {
                state.user = action.payload;
            }
        },
    }
)

export const { SET_USER } = UserSlice.actions;
export default UserSlice.reducer;
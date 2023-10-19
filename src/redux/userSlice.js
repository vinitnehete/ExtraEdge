import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     userList: [],
};

export const userSlice = createSlice({
     name: "counter",
     initialState,
     reducers: {
          updateUserList: (state, payload) => {
               // console.log(payload);
               state.userList = payload.payload;
          },
     },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;

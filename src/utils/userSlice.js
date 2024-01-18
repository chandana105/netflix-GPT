import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, //in starting havign no logged in user
  reducers: {
    addUser: (state, action) => {
      return action.payload; //it ll add the initlaState mein user obj (action.payload)
    }, //when user is logged in
    removeUser: (state, action) => {
      return null; // will empty the inital state
    }, //when user is logged out (to remove user )
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

// If you want to mutate the whole state, return the data to replace the whole state.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "", 
    username:"",
    email: "", 
    number: "", 
}


export const userSlice = createSlice ({
  name: "user", 
  initialState, 
  reducers: {
    addUser: (state, action) => {
        const {name, username, email, number} = action.payload;
        state.name = name;
        state.username = username;
        state.email = email;
        state.number = number;
    },
    changeEmail: (state, action) => {
        const {email} = action.payload;
        state.email = email;
    }

  }
})

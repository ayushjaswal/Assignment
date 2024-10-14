import { createSlice } from '@reduxjs/toolkit'
import { userState } from '../../types';


const initialState: userState = {
  email: ""
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.email = action.payload.email;
    },
    removeUser: (state) => {
      state.email = "";
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer
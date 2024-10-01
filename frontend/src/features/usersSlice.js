import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  usersList: [],
  status: 'idle', // | loading | succeeded | failed
  error: null
}

export const fetchAllUsers = createAsyncThunk('users/fetchUsers',async() => {
  const response = await axios.get(
    "https://fullstack-db-management-service.onrender.com/users"
  );
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (buider) => {
    buider.addCase(fetchAllUsers.pending,(state) => {
      state.status = 'loading'
    })
    .addCase(fetchAllUsers.fulfilled,(state,action) => {
      state.status = 'succeeded'
      state.usersList = action.payload
    })
    .addCase(fetchAllUsers.rejected,(state,action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default usersSlice.reducer
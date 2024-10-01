import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  booksList: [],
  status: 'idle', // loading | succeeded | failed
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async() => {
  const response = await axios.get(
    "https://fullstack-db-management-service.onrender.com/books/"
  );
  return response.data
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending,(state) => {
      state.status = 'loading'
    })
    .addCase(fetchBooks.fulfilled,(state,action) => {
      state.status = 'succeeded'
      state.booksList = action.payload
    })
    .addCase(fetchBooks.rejected,(state,action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export default booksSlice.reducer
import {configureStore} from "@reduxjs/toolkit"
import booksSliceReducer from "../features/booksSlice"
import usersSliceReducer from "../features/usersSlice"
import transactionsSliceReducer from "../features/transactionsSlice"

export const store = configureStore({
  reducer:{
    books: booksSliceReducer,
    users: usersSliceReducer,
    transactions: transactionsSliceReducer
  }
})
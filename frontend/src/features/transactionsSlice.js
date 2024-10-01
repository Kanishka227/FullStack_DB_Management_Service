import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  transactionsList: [],
  status: "idle",
  error: null,
  message: null,
};

export const fetchTransactionsList = createAsyncThunk(
  "transactions/fetchTransactions",
  async () => {
    const response = await axios.get(
      "https://fullstack-db-management-service.onrender.com/transactions/"
    );
    return response.data;
  }
);

export const sendIssueInfo = createAsyncThunk(
  "transactions/issue",
  async ({ bookName, userId, date }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/transactions/issue",
        {
          bookName,
          userId,
          date,
        }
      );
      return response.data;
    } catch (error) {
      const message = error.response?.data?.message || "Failed to issue book";
      throw new Error(message);
    }
  }
);

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionsList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTransactionsList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.transactionsList = action.payload; // Update transactionsList with fetched data
      })
      .addCase(fetchTransactionsList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(sendIssueInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sendIssueInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.message = action.payload.msg;
      })
      .addCase(sendIssueInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.message = action.payload.msg;
      });
  },
});

export default transactionsSlice.reducer;

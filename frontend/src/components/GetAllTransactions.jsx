import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../features/booksSlice";
import { fetchTransactionsList } from "../features/transactionsSlice";

const GetAllTransactions = () => {
  const dispatch = useDispatch();

  const transactionsList = useSelector((state) => state.transactions.transactionsList);
  const status = useSelector((state) => state.transactions.status);
  const error = useSelector((state) => state.transactions.error);

  useEffect(() => {
    if (status === "idle") dispatch(fetchTransactionsList());
  }, [dispatch, status]);
  return (
    <div className="container">
      <h1>Transactions List</h1>
      {status === "loading" && <p>Loading</p>}
      {status === "failed" && <p>Error : {error}</p>}
      {status === "succeeded" && Array.isArray(transactionsList) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Book Name</th>
              <th scope="col">User id</th>
              <th scope="col">Issue date</th>
            </tr>
          </thead>
          <tbody>
            {transactionsList.map((transactions, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transactions.bookName}</td>
                <td>{transactions.userId}</td>
                <td>{new Date(transactions.issueDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
export default GetAllTransactions;

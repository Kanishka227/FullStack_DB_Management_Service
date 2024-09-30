import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchBooks } from "../features/booksSlice"

const GetAllBooks = () => {
  const dispatch = useDispatch()

  const booksList = useSelector((state) => state.books.booksList)
  const status = useSelector((state) => state.books.status)
  const error = useSelector((state) => state.books.error)

  useEffect(() => {
    if(status === 'idle') dispatch(fetchBooks())
  },[dispatch,status])
  return (
    <div className="container">
      <h1>Books List</h1>
      {status === "loading" && <p>Loading</p>}
      {status === "failed" && <p>Error : {error}</p>}
      {status === "succeeded" && Array.isArray(booksList) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Rent/Day</th>
            </tr>
          </thead>
          <tbody>
            {booksList.map((book,index) => (
              <tr key={book.id}>
                <td>{index+1}</td>
                <td>{book.name}</td>
                <td>{book.category}</td>
                <td>{book.rentPerDay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default GetAllBooks
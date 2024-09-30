import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "../features/usersSlice"

const GetAllUsers = () => {
  const dispatch = useDispatch()

  const usersList = useSelector((state) => state.users.usersList)
  const status = useSelector((state) => state.users.status)
  const error = useSelector((state) => state.users.error)

  useEffect(() => {
    if(status === 'idle') dispatch(fetchAllUsers())
  },[dispatch,status])
  return (
    <div className="container">
      <h1>Users List</h1>
      {status === "loading" && <p>Loading</p>}
      {status === "failed" && <p>Error : {error}</p>}
      {status === "succeeded" && Array.isArray(usersList) && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">User id</th>
              <th scope="col">Name</th>
              <th scope="col">Dues</th>
            </tr>
          </thead>
          <tbody>
            {usersList.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.dues}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default GetAllUsers
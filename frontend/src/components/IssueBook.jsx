import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { sendIssueInfo } from "../features/transactionsSlice"

const IssueBook = ({bookName,userId,date}) => {
  const dispatch = useDispatch()
  const status = useSelector((state) => state.transactions.status)
  const error = useSelector((state) => state.transactions.error)
  const message = useSelector((state) => state.transactions.message)

  useEffect(()=>{
    if(status === 'idle') dispatch(sendIssueInfo({bookName,userId,date})) 
  },[])

  return(
    <div className="container">
      {message  && <p>{message}</p>}
      {error  && <p>{error}</p>}
    </div>
  )
}
export default IssueBook
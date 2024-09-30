import { useLocation } from "react-router-dom"
import GetAllBooks from "../components/GetAllBooks"
import Navbar from "../components/Navbar"
import SearchBook from "../components/SearchBook"
import SearchByPrice from "../components/SearchByPrice"
import NamePriceCateg from "../components/NamePriceCateg"
import GetAllUsers from "../components/GetAllUsers"
import IssueBook from "../components/IssueBook"
import GetAllTransactions from "../components/GetAllTransactions"

const Res = () => {
  const location = useLocation()
  const {apiNumber,bookName,priceRange,category,userId,date} = location.state || {}

  return(
    <div className="container">
      <Navbar/>
      {apiNumber === 1 && <GetAllUsers/>}
      {apiNumber === 2 && <GetAllBooks/>}
      {apiNumber === 3 && <SearchBook bookName={bookName}/>}
      {apiNumber === 4 &&  <SearchByPrice priceRange={priceRange}/>}
      {apiNumber === 5 && <NamePriceCateg bookName={bookName} category={category} priceRange={priceRange}/>}
      {apiNumber === 6 && <IssueBook bookName={bookName} userId={userId} date={date}/>}
      {apiNumber === 7 && <GetAllTransactions/>}
    </div>
  )
}
export default Res
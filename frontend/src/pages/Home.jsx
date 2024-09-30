import GetAllBooks from "../components/GetAllBooks"
import Navbar from "../components/Navbar"
import Operations from "../components/Operations"

const Home = () => {
  return(
    <div className="container">
      <Navbar/>  
      <Operations/>
    </div>
  )
}
export default Home
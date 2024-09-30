import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Operations = () => {
  const navigate = useNavigate();
  const [bookName, setBookName] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [category,setCategory] = useState("")
  const [userId, setUserId] = useState("")
  const [date,setDate] = useState()

  const handleNavigation = (apiNumber, bookName,priceRange,category,userId,date) => {
    navigate("/res", { state: { apiNumber, bookName,priceRange ,category,userId,date} });
  };
  return (
    <div className="container" style={{ marginTop: "2em" }}>
      <div style={{ marginBottom: "1em" }}>
        <h4>
          1. Click to get data of all users
          <span style={{ marginLeft: "1em" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                handleNavigation(1, bookName, priceRange, category)
              }
            >
              Search
            </button>
          </span>
        </h4>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>
          2. Click to get data of all books
          <span style={{ marginLeft: "1em" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleNavigation(2)}
            >
              Search
            </button>
          </span>
        </h4>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>3. Enter book name or a term in the name of the book to search </h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="name/term of the book"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
            onChange={(e) => setBookName(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleNavigation(3, bookName)}
          >
            Search
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>4. Enter price range to search the books</h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            defaultValue="Select a range"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
          >
            <option disabled>Select a range</option>
            <option>10-20</option>
            <option>20-25</option>
            <option>25-30</option>
            <option>30 and above</option>
          </select>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleNavigation(4, bookName, priceRange)}
          >
            Search
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>
          5. Enter category + name/term + rent per day(range) to get the books
        </h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <select
            onChange={(e) => setCategory(e.target.value)}
            defaultValue="Select a category"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
          >
            <option disabled>Select a category</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="education">Education</option>
            <option value="biography">Biography</option>
          </select>{" "}
          <input
            onChange={(e) => setBookName(e.target.value)}
            type="text"
            placeholder="name/term of the book"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
          />{" "}
          <select
            onChange={(e) => setPriceRange(e.target.value)}
            defaultValue="Select a range"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
          >
            <option disabled>Select a range</option>
            <option>10-20</option>
            <option>20-25</option>
            <option>25-30</option>
            <option>30 and above</option>
          </select>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleNavigation(5, bookName, priceRange, category)}
          >
            Search
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>
          6. - book name + person name/userId + issue date (BOOK IS ISSUED){" "}
        </h4>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="name of the book"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
            onChange={(e) => setBookName(e.target.value)}
          />
          <input
            type="text"
            placeholder="userId"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            type="date"
            placeholder="userId"
            style={{
              marginRight: "2em",
              padding: "0.5em",
              fontSize: "1rem",
              border: "2px solid black",
            }}
            onChange={(e) => setDate(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              handleNavigation(6, bookName, priceRange, category, userId, date)
            }
          >
            Issue
          </button>
        </div>
      </div>
      <div style={{ marginBottom: "1em" }}>
        <h4>
          7. Click to get data of all transactions
          <span style={{ marginLeft: "1em" }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() =>
                handleNavigation(7, bookName, priceRange, category)
              }
            >
              Search
            </button>
          </span>
        </h4>
      </div>
    </div>
  );
};
export default Operations;

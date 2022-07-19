import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    userFirstName: "",
    userLastName: "",
    userDob: "",
    userNumber: "",
    userEmail: "",
    userPass: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({...user,[name]:value});
    debugger
  };
  console.clear();
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReocrds = { ...user, id: new Date().getTime().toString() };
    setRecords([...records, newReocrds]);
    console.log(records);
  };

  return (
    <form>
      <div className="form-grid">
        <div className="box">
          <div className="heading">
            <h1>Registration</h1>
          </div>
          <div className="form-display">
            <label>First Name</label>
            <div>
              <input
                name="userFirstName"
                value={""||user.userFirstName}
                type="text"
                placeholder="first name"
                onChange={handleInput}
              />
            </div>
            <label>Last Name</label>
            <div>
              <input
                name="userLastName"
                value={user.userLastName}
                type="text"
                placeholder="last name"
                onChange={handleInput}
              />
            </div>
            <label>DOB</label>
            <div>
              <input
                name="userDob"
                value={user.userDob}
                type="date"
                onChange={handleInput}
              />
            </div>
            <label>Mobile Num</label>
            <div>
              <input
                name="userNumber"
                value={user.userNumber}
                type="text"
                onChange={handleInput}
              />
            </div>

            <label>Email</label>
            <div>
              <input
                name="userEmail"
                value={user.userEmail}
                type="email"
                placeholder="email@123"
                onChange={handleInput}
              />
            </div>
            <label>Password</label>
            <div>
              <input
                name="userPass"
                value={user.userPass}
                type="password"
                onChange={handleInput}
              />
            </div>
            <label>Confirm Password</label>
            <div>
              <input
                name="userPass"
                value={user.userPass}
                type="password"
                onChange={handleInput}
              />
            </div>

            <button type="submit" className="btn" onClick={handleSubmit}>
              submit
            </button>
          </div>
          <div>
            <p>{user.id} </p>
            <p>{user.userFirstName}</p>
            <p>{user.userLastName}</p>
            <p>{user.userDob}</p>
            <p></p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;

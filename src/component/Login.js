import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { GlobalContext } from "../App";



export const Login = () => {
  const {setGlobal} = useContext(GlobalContext)

  const [error, setError] = useState({})
  const navigate = useNavigate()

  const [inpData, setInpData] = useState({
    userName: "",
    password: "",

  });
  const getData = (e) => {

    const { name, value } = e.target;
    setInpData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: false }));
  };



  
  const handleLogin = (e) => {
    e.preventDefault();
    const olderUserData = JSON.parse(localStorage.getItem('userData') || [])
    const userData = olderUserData.find(user=>user.userName===inpData.userName)
    if(inpData.userName===""){
      setError(prev=>({...prev, userName:true}))

    }
    else if(inpData.password===""){
      setError(prev=>({...prev, password:'Required field'}))

    }
    else{
      if (userData) {
        if(inpData.password !== userData.password){
          setError(prev=>({...prev, password:"wrong password"}))
          return 
        }
        if(userData.password===inpData.password &&  userData.userName===inpData.userName){
            // redirect home
            setGlobal(prev=>({...prev, user:userData, isLogin:true }))
            navigate('/')
            
        }
    }
  }
 

  };


  return (
    <>
    <form className="row g-3 needs-validation singupform" novalidate>
      <div>
        <h1 className="container-fluid headsingup">Login</h1>
      </div>
       <div className="col-md-6">
          <label for="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className={`form-control ${error.userName ? "is-invalid" : ''}`}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              value={inpData.userName}
              onChange={getData}
              name="userName"
              placeholder="username"
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="col-md-6">
          <label for="validationCustom05" className="form-label">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${error.password ? "is-invalid" : ''}`}
            id="validationCustom05"
            onChange={getData}
            name="password"
            value={inpData.password}
            required
            placeholder="password"
          />
          <div className="invalid-feedback">password is required</div>
        </div>
    
      
      <div className="col-12">
        <button className="btn btn-primary col-12" type="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="col-12">
          <label className="form-check-label" for="invalidCheck">
            <a className="nav-link forgetpass" href="/">Forgot password</a>
          </label>
          <div>
          <label className="form-check-label col-12" for="invalidCheck">
         <NavLink className="nav-link forgetpass" to="/SingUp">Create a account </NavLink>
          </label>
          </div>
          
        </div>
    </form>
  </>
  );
};

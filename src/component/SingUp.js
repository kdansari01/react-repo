import { useState } from "react";
import { NavLink } from "react-router-dom";

export const SingUp = () => {
  const [error, setError] = useState({})
  const [inpData, setInpData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    Dob: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });



  const getData = (e) => {

    const { name, value } = e.target;
    setInpData((prev) => ({ ...prev, [name]: value }));
    setError((prev) => ({ ...prev, [name]: false }));
  };


  console.clear();
  console.log(inpData);

  // const navigate = useNavigate()

  const handleSinUp = (e) => {
    e.preventDefault();
    // alert("hello")

    const { firstName, lastName, userName, Dob,email,number, password,confirmPassword} =
      inpData;
    if (firstName === "") {
      setError(prev=>({...prev, firstName:true}))
    }
    else if(lastName===""){
      setError(prev=>({...prev, lastName:true}))
    }
    else if(userName===""){
      setError(prev=>({...prev, userName:true}))

    }
    else if(Dob===""){
      setError(prev=>({...prev, Dob:true}))

    }
    else if(email===""){
      setError(prev=>({...prev, email:true}))

    }
    else if(number===""){
      setError(prev=>({...prev, number:true}))

    }
    else if(password===""){
      setError(prev=>({...prev, password:true}))

    }
    else if(confirmPassword!==password){
      setError(prev=>({...prev, confirmPassword:true}))

    }
     else{
       const olderUserData = JSON.parse(localStorage.getItem('userData') || [])
       localStorage.setItem("userData",JSON.stringify([...olderUserData, inpData]))
       
      }
    if(localStorage.getItem(inpData)){
      alert("signUp successfull")
    }
      //clear form after sign up
     setInpData({ 
      firstName: "",
      lastName: "",
      userName: "",
      Dob: "",
      email: "",
      number: "",
      password: "",
      confirmPassword: "",
     }) 

      

  };




  return (
    <>
      {/* <img
        src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"
        className="bd-placeholder-img"
      /> */}
      <form className="row g-3 needs-validation singupform" noValidate>
        <div>
          <h1 className="container-fluid headsingup">SignUp</h1>
        </div>
        <div className="col-md-6">
          <label for="validationCustom01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${error.firstName ? "is-invalid" : ''}`}
            id="validationCustom01"
            value={inpData.firstName}
            onChange={getData}
            name="firstName"
            required
            placeholder="firstname"
          />
          {/* {error.firstName && <span className="text-danger">first Name is required</span>} */}
          <div className="invalid-feedback">first Name is required</div>

        </div>
        <div className="col-md-6">
          <label for="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${error.lastName ? "is-invalid" : ''}`}
            id="validationCustom02"
            value={inpData.lastName}
            onChange={getData}
            name="lastName"
            required
            placeholder="lastname"
          />
          {/* {error.lastName && <span className="text-danger">last Name is required</span>} */}
          {/* <div className="valid-feedback">Looks good!</div> */} 
           <div className="invalid-feedback">last name is required.</div>
          
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustomUsername" className="form-label">
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
          <label htmlFor="validationCustom03" className="form-label">
            DOB
          </label>
          <input
            type="date"
            className={`form-control ${error.Dob ? "is-invalid" : ''}`}
            id="validationCustom03"
            onChange={getData}
            name="Dob"
            required
            placeholder="Dob"
            value={inpData.Dob}
          />
          <div className="invalid-feedback">choose a valid date of birth</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">
            email
          </label>
          <input
            type="email"
            className={`form-control ${error.email ? "is-invalid" : ''}`}
            id="validationCustom03"
            onChange={getData}
            name="email"
            required
            placeholder="abc@gmail.com"
            value={inpData.email}
          />
          <div className="invalid-feedback">email is must required</div>

        </div>

        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
            mobile number
          </label>
          <input
            type="text"
            className={`form-control ${error.number ? "is-invalid" : ''}`}
            id="validationCustom05"
            onChange={getData}
            name="number"
            value={inpData.number}
            required
            placeholder="number"
          />
          <div className="invalid-feedback">number is required</div>
    
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
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
        <div className="col-md-6">
          <label htmlFor="validationCustom05" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${error.confirmPassword ? "is-invalid" : ''}`}
            id="validationCustom05"
            onChange={getData}
            name="confirmPassword"
            value={inpData.confirmPassword}
            required
            placeholder="password"
          />
          <div className="invalid-feedback">please enter the valid password</div>
        </div>
       
        <div className="col-12">
          <button
            className="btn btn-primary col-12"
            type="submit"
            onClick={handleSinUp}
          >
            Sign Up
          </button>

        </div>
        <div>
          <label className="form-check-label" for="invalidCheck">
          already a user?<NavLink className="nav-link forgetpass" to="/Login">login</NavLink>
          </label>
          </div>
          
      </form>
    </>
  );
};

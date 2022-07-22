import { useEffect, useState } from "react";
import "./App.css"

export const Practice = () => {
  const [data, setData] = useState([]);
  // const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((allData) => {
        setData(allData);
      });
  }, []);

  console.log(data);
  // const handleBtn = () => {
  //   setNewData(data);
  //   // console.log(newData);
  // };


//  const changeData = ()=>{
  
//   }
//  }


  return (
    <div className="insurance-list">
      <h2 className="heading">Insurance details</h2>
      {data.map((ele, index) => {
        if(index===0){

          return (
            <>
              <div className="list">
                <div className="list-box" key={ele.id}>
  
                  <h2 key={ele.id} className="name">Name: {ele.name}</h2>
                  <p key={ele.id}>username: {ele.username}</p>
                  <p key={ele.id}>Email: {ele.email}</p>
                  <h4 className="address">address</h4>
                  <p key={ele.id}> street: {ele.address.street}</p>
                  <p key={ele.id}>city: {ele.address.city}</p>
                  <p key={ele.id}>zipcode: {ele.address.zipcode}</p>
                  <p key={ele.id}>website: {ele.website}</p>
                  <p key={ele.id}>company: {ele.company.bs}</p>
                  
                </div>
               <div className="buttons"><button className="btn">prev</button>
                <button className="btn">Next</button></div>
              </div>
            </>
          );
        }
      })}
      {/* <button onClick={changeData}> Next</button> */}
      {/* <div>
        <button className="btn" onClick={handleBtn}>
          New Drinks
        </button>
      </div> */}
    </div>
  );
};

import { useEffect, useState } from "react";
import "./App.css";

export const Practice = () => {
  const [data, setData] = useState([]); //stored data
  const [index, setIndex] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((allData) => {
        setData(allData);
      });
  }, []);


  const handlePage = (num)=>{
    setIndex((prevIndex)=> prevIndex + num
    )
  }


  const ele = data[index] || {}


  return (
    <div className="insurance-list">
      <h4>Page {index+1}/{data.length}</h4>
      <h2 className="heading">Insurance details</h2>
            <div>
              <div className="list">
                <div className="list-box" key={ele?.id}>
                  <h2 className="name">Name: {ele?.name}</h2>
                  <p>username: {ele?.username}</p>
                  <p>Email: {ele?.email}</p>
                  <h4 className="address">address</h4>
                  <p>city: {ele?.address?.city}</p>
                  <p>zipcode: {ele?.address?.zipcode}</p>
                  <p>website: {ele?.website}</p>
                  <p> street: {ele?.address?.street}</p>
                  <p>company: {ele?.company?.bs}</p>
                </div>
                </div>
              </div>
           <div className="buttons">
                  <button disabled={index===0} onClick={()=>handlePage(-1)} className="btn">
                  &#8249;

                  </button> 
                  <button disabled={data.length-1===index} className="btn" onClick={()=>handlePage(1)}>
                  &#8250;
                  </button>
            </div>
    </div>
  );
};

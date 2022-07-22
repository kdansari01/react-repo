import { useEffect, useState } from "react";
import "./App.css";

export const Practice = () => {
  const [data, setData] = useState([]); //stored data
  const [count, setCount] = useState(1); //set count for next and prev
  const [index1, setIndex] = useState(1);
  // const [newData, setNewData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((allData) => {
        setData(allData);
      });
  }, []);

  //prev button

  console.log(data);

  const prevItem = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
    if (count === 0) {
      alert("prev is null");
    }
  };

  //next button
  const nextItem = (e) => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count < 11) {
      setIndex(count);
    }
    if (count === 10) {
      setCount(1);
    }
  }, [count]);
  console.log(count);

  return (
    <div className="insurance-list">
      <h2 className="heading">Insurance details</h2>
      {data.map(
        (ele, index) =>
          ele.id === index1 && (
            <div>
              {console.log(ele.id, index)}
              <div className="list">
                <div className="list-box" key={ele.id}>
                  <h2 className="name">Name: {ele.name}</h2>
                  <p>username: {ele.username}</p>
                  <p>Email: {ele.email}</p>
                  <h4 className="address">address</h4>
                  <p>city: {ele.address.city}</p>
                  <p>zipcode: {ele.address.zipcode}</p>
                  <p>website: {ele.website}</p>
                  <p> street: {ele.address.street}</p>
                  <p>company: {ele.company.bs}</p>
                </div>
                <div className="buttons">
                  <button onClick={prevItem} className="btn">
                  &#8249;

                  </button> 
                  <button className="btn" onClick={nextItem}>
                  &#8250;
                  </button>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

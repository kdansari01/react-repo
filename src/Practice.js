import {useState} from "react"
export const Practice = () => {
  const [color, setName] = useState("red");
  return (
    <>
      <h1>this is {color}! color</h1>
      <button type="button" onClick={() => setName("red")}>
        Red
      </button>
      <button type="button" onClick={() => setName("black")}>
        Black
      </button>
      <button type="button" onClick={() => setName("blue")}>
        Blue
      </button>
      <button type="button" onClick={() => setName("green")}>
        Green
      </button>
    </>
  );
};

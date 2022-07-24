import "./eCommerce.css";
import { Home } from "./eCommerce";
// import "./App.css";
// import { Practice } from "./Practice";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Navbar } from "./components/Navbar";
import { createContext, useState } from "react";


const initialValue = {cart:[]}

export const GlobalContext = createContext(initialValue)

function App() {
  const [global, setGlobal] = useState(initialValue)

  return (
    <GlobalContext.Provider value={{global, setGlobal}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Cart" exact element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;

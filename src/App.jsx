import { Route, Routes } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      <div className="bg-slate-900">
        <Navbar/>
      </div>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
    </div>
  );
};

export default App;

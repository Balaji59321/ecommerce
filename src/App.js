import "./App.css";
import Home from "./Home";
import Shop from "./Shop";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ViewItem from "./ViewItem";
import Create from "./Create";
import Edit from "./Edit";
import reducer, { intitialValue } from "./util";
import ContextProvider from "./ContextProvider";
import Cart from "./Cart";
import ResponsiveAppBar from "./Navigation";

function App() {
  return (
    <ContextProvider intitialValue={intitialValue} reducer={reducer}>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route exact path="/view/:id" element={<ViewItem />}></Route>
          <Route exact path="/create" element={<Create />}></Route>
          <Route exact path="/edit/:id" element={<Edit />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;

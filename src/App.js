import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Product from "./component/Product";

import { Switch, Route } from "react-router-dom";
import Products from "./component/Products";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />

      </Switch>
    </>
  );
}
export default App;

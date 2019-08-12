import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Carousel from "./components/Carousel";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";



function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
        <Carousel />
        </div>
        <Switch>
          <Route exact path="/" component={Books} />
          {/* component points to the pages under src  */}
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

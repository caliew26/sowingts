//this is what controls what the user sees
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CarouselBootstrap from "./components/Carousel";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div>
          <br></br>
        <CarouselBootstrap />
          <br></br>
        </div>
        <Switch>
          <Route exact path="/" component={Books} />
          {/* component points to the pages under src  */}
          <Route exact path="/about" component={About} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

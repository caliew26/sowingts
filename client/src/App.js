//this is what controls what the user sees
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import About from "./pages/About";
import Footer from "./components/Footer";
import Admin from "./pages/Admin";
import UserForm from "./components/UserForm";
import Login from "./components/Login";


function App() {
  console.log(process.env.GOOGLE_KEY + "HELLLLOOOOOO") 
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          {/* component points to the pages under src  */}
          <Route exact path="/about" component={About} />
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/admin/user" component={UserForm} />
          <Route exact path="/admin/login" component={Login} />
          <Route exact path="/admin" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

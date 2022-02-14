import React from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoginScreen from "./Screens/LoginScreen";

function App() {
  // const user=null;

  return (
    <div className="app">
      {/* <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
          <Route exact path="/">
          </Route>
        </Switch>
        )}
        
      </Router> */}
     <HomeScreen />

    </div>
  );
}

export default App;

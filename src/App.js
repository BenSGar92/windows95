import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main/main"
import Footer from "./components/footer/footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'

function App() {
  return (
    <Router>
      <div className="background">
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

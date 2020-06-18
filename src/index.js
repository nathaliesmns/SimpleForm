import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Link,
  Route,
  useLocation
} from 'react-router-dom';
import { StateMachineProvider, createStore } from 'little-state-machine';
import { DevTool } from 'little-state-machine-devtools';
import './index.css';
import SimpleForm from './components/SimpleForm';
import ConfirmThankYou from './components/ConfirmThankYou';




createStore({
  yourDetails: {
    Name: "",
    Adresse: "",
    Email: "",
    Passwort: ""
  }
});

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navigation">
        <ul className="steps">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Informationen</Link>
          </li>
          <li className={location.pathname === "/danke" ? "active" : ""}>
            <Link to="/danke">Kontrolle</Link>
          </li>
        
        </ul>
      </nav>
      <Route exact path="/" component={SimpleForm} />
      <Route path="/danke" component={ConfirmThankYou} />
      
    </>
  );
};

function App() {
  return (
    <StateMachineProvider>
      <DevTool />
      <div className="heading">
        <h1>Werde Teil der Community</h1>

        <Router>
          <Pages />
        </Router>
      </div>
    </StateMachineProvider>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

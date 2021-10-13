import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/UI/Home';
import Countries from './components/Country/Countries';
import CountryPage from './components/Country/CountryPage';

const App = () => {

  return (
    <Router>

      <Switch>
        <Route exact path = "/">
          <div className="App">
            <Home />
          </div>
        </Route>
        <Route exact path = "/countries">
          <div className="App">
            <Countries />
          </div>
        </Route>
        <Route path = "/countries/:country" >
          <CountryPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

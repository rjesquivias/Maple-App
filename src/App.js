import './App.css';
import Homepage from './components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bio from './components/Bio';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/gallery">
            <h1>gallery</h1>
          </Route>
          <Route path="/breeder">
            <h1>breeder</h1>
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;

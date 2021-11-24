import './App.css';
import Homepage from './components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Bio from './components/Bio';
import Gallery from './components/Gallery';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/bio">
            <Bio />
          </Route>
          <Route path="/gallery">
            <Gallery />
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

//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CreatePost from './Components/CreatePost';
import {Home} from './Components/Home';
import { Footer } from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header Title="CreatePost by RS"></Header>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;

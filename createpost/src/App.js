//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CreateBlog from './Components/CreateBlog';
import { Home } from './Components/Home';
import { Footer } from './Components/Footer'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {store} from './actions/store'
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store ={store}>
      <Router>
        <Header Title="CreatePost by RS"></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/createblog">
            <CreateBlog />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </Provider> 
  );
}

export default App;

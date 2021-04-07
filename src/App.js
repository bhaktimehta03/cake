import './App.css';
import Header from './components/Header.js';
import CallNow from './components/CallNow.js'
import CategoryList from './components/CategoryList.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePg from './HomePg';
import AboutUs from './components/AboutUs.js';

function App() {
  return (
    <div className="App container">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePg} />
          <Route path="/order-page" component={CategoryList} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

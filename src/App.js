import './App.css';
import Header from './components/Header.js';
import CallNow from './components/CallNow.js'
import BrowseCakeHooks from './components/BrowseCakeHooks.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePg from './HomePg';
import AboutUs from './components/AboutUs.js';
import CakeDetails from './components/CakeDetails.js'

function App() {
  return (
    <div className="App container">

      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePg} />
          <Route path="/order-page" component={BrowseCakeHooks} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/cake-details" component={CakeDetails} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

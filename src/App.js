import './App.css';
import Header from './components/Header.js';
import CallNow from './components/CallNow.js'
import BrowseCake from './components/BrowseCake.js'
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
          <Route path="/order-page" component={BrowseCake} />
          <Route path="/about-us" component={AboutUs} />
        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;

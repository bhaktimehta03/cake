import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import BigPitch from './components/BigPitch.js';
import SocialMedia from './components/SocialMedia.js'
import CallNow from './components/CallNow.js'
import Testimonials from './components/Testimonials.js'
import Category from './components/category.js'
import Cake from './components/Cake.js'

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <BigPitch></BigPitch>
      <div className="row">
        <div className="col-8">
          <Testimonials></Testimonials>
          </div>
          <div className="col-4">
            <SocialMedia></SocialMedia>
          </div>
        </div>
      <div className="row">
        <div className="col-12">
          <CallNow ></CallNow>
        </div>
      </div>
      <Category></Category>
      <Cake></Cake>
    </div>
  );
}

export default App;

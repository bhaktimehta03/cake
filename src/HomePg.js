import './App';
import BigPitch from './components/BigPitch.js';
import SocialMedia from './components/SocialMedia.js'
import CallNow from './components/CallNow.js'
import Testimonials from './components/Testimonials.js'

function HomePage() {
  return (
    <div className="HomePage container">
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
    </div>
  );
}

export default HomePage;

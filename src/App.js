import Contactus from "./component/ContactUs/Contactus";
import Navbar from "./component/Navbar/Navbar";
import OurValue from "./component/OurValue/OurValue";
import Slider from "./component/Slider/Slider";

function App() {
  return (
    <div>
      <div className=''>
        <Navbar/>
      </div>
      <div className='content'>
        <Slider/>
      </div>
      <div className='message'>
       <OurValue/>
      </div>
      <div className='contactus mb-5'>
       <Contactus/>
      </div>
      <div className='justify-content-center d-flex align-items-center footer '>
          Copyright Ranto 2022
      </div>
    </div>
  );
}

export default App;

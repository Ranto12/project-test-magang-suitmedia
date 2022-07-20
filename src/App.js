import Contactus from "./component/ContactUs/Contactus";
import Navbar from "./component/Navbar/Navbar";
import OurValue from "./component/OurValue/OurValue";
import Slider from "./component/Slider/Slider";
import logo1 from "./assets/facebook-official.png";
import logo2 from "./assets/twitter.png";


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
      <div className='justify-content-center align-items-center footer '>
          <span> Copyright @ 2016 PT Company</span>
          <br/>
          <div className="flex-column  ">
            <img className="img-icon pe-4 ps-4 pt-1"  src={logo1} alt="" />
            <img className="img-icon pe-4 ps-4 pt-1" src={logo2} alt="" />
          </div>
          
      </div>
      
    </div>
  );
}

export default App;

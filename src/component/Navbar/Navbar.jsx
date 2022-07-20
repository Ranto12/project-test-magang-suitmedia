import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [hover, setHover] = useState(false);
  const handleHover = () =>{
    setHover(!hover);
  }
  return (
    <nav class="navbar navbar-light bg-light ">
        <div class="container-fluid ms-5 me-5 navbarhover">
            <span class="navbar-brand mb-0 h1 ms-5">Navbar</span>
            
            <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
            {/* <div className=''>
                <div className=''>
                <span class="navbar-brand mb-0 h1 hoveractive  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onMouseEnter={handleHover}>ABOUT</span>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
                <span class="navbar-brand mb-0 h1 hoveractive">OUR WORK</span>
                <span class="navbar-brand mb-0 h1 hoveractive">OUT TIME</span>
                <span class="navbar-brand mb-0 h1 hoveractive">CONTACT</span>
            </div> */}
        </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import './Conctactus.css';

const Contactus = () => {
    const handlesubmit =() =>{
        alert('Thank you for your message');
    }
  return (
    <div className=''>
        <div className='d-flex justify-content-center marginbawah mb-1 font-title'>
            CONTACT US 
        </div>
        <form >
            <div className='  justify-content-center' >
                <div className='d-flex flex-column  justify-content-center input-contact '>
                    <label className='d-flex'  htmlFor="Name">Name </label>
                    <input required type="text" />
                </div>
                <div className='d-flex flex-column  justify-content-center input-contact '>
                    <label className='d-flex'  htmlFor="Name">Email </label>
                    <input required type="text" />
                </div>
                <div className='d-flex flex-column   justify-content-center input-contact '>
                    <label className='d-flex'  htmlFor="Name">messeage </label>
                    <textarea required className='text-area' type="text" />
                </div>
                <div className='d-flex flex-column   justify-content-center input-contact mt-4'>
                    <button className='btn btn-primary'>Submit</button>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default Contactus
import React, { useState } from 'react';
import './Conctactus.css';

const Contactus = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [erroremail, setErroremail] = useState(false);
    const [errorname, setErrorname] = useState(false);
    const [errormessage, setErrormessage] = useState(false);
    
    const regexemail = /^\S+@\S+\.\S+$/;

    const handleName= (e) => {
        setName(e.target.value);
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
    }
    const handleMessage= (e) => {
        setMessage(e.target.value);
    }
    // const navigate = useNavigate();
    const handlesubmit =(e) =>{
        // e.preventDefault();
        if (!regexemail.test(email)) {
            console.log("Email is not valid");
            setErroremail(true);
          } else {
            setErroremail(false);
          }
        if (name === '') {
            console.log("name is not valid");
            setErrorname(true);
          } else {
            setErrorname(false);
          }
        if (message === '') {
            console.log("message is not valid");
            setErrormessage(true);
          } else {
            setErrormessage(false);
          }
        // window.location.reload();
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
                    <input  type="text" onChange={handleName}/>
                    { errorname === true ? (
                        <span>nama anda belum terisi</span>
                    ):(
                       null
                    )
                    }
                </div>
                <div className='d-flex flex-column  justify-content-center input-contact '>
                    <label className='d-flex'  htmlFor="Name">Email </label>
                    <input  type="email" onChange={handleEmail} />
                    { erroremail === true ? (
                        <span>email  anda belum sesuai format</span>
                    ):(
                       null
                    )
                    }
                </div>
                <div className='d-flex flex-column   justify-content-center input-contact '>
                    <label className='d-flex'  htmlFor="Name">messeage </label>
                    <textarea  className='text-area' type="text" onChange={handleMessage} />
                    { errormessage === true ? (
                        <span>pesan anda belum terisi</span>
                    ):(
                       null
                    )
                    }
                </div>
                <div className='d-flex flex-column   justify-content-center input-contact mt-4'>
                    <button className='btn btn-primary' onSubmit={handlesubmit}>Submit</button>
                </div>
            </div>
        </form>
        
    </div>
  )
}

export default Contactus
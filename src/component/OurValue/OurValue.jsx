import React from 'react';
import './OurOver.css';
import Lampu from '../../assets/lightbulb-o.png';
import Bank from '../../assets/bank.png';
import Balancescale from '../../assets/balance-scale.png';

const OurValue = () => {
  return (
    <div className=''>
        <div className='d-flex justify-content-center marginbawah mb-1 font-title'>
            OUR VALUES
        </div>
        <div className=' d-flex justify-content-center '>
            <div className='card card-ourvalue p-4 m-3 bg-warning'>
                <div className='pb-4'>
                    <img src={Lampu} alt="" style={{color:"black",}}  className="incon"/>
                </div>
                <div className='title pb-3'>INNOVATIVE</div>
                <div className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sapiente delectus qui provident soluta quam quasi omnis perspiciatis amet asperiores.</div>
            </div>
            <div className='card card-ourvalue p-4 m-3 bg-success'>
                <div className='pb-4'>
                    <img src={Bank} alt="" style={{color:"black",}}  className="incon"/>
                </div>
                <div className='title pb-3'>LOYALTY</div>
                <div className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sapiente delectus qui provident soluta quam quasi omnis perspiciatis amet asperiores.</div>
            </div>
            <div className='card card-ourvalue p-4 m-3 bg-info'>
                <div className='pb-4'>
                    <img src={Balancescale} alt="" style={{color:"black",}}  className="incon"/>
                </div>
                <div className='title pb-3'>RESPECT</div>
                <div className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere sapiente delectus qui provident soluta quam quasi omnis perspiciatis amet asperiores.</div>
            </div>
        </div>
    </div>
  )
}

export default OurValue
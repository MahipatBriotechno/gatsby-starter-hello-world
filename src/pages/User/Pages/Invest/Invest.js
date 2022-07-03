import React from 'react'
import './Invest.css'
import image3 from '../../../../images/page3Img/image3.png'
import img from '../../../../images/page3Img/5059932.png'
import Footer from '../../Component/Footer'
import AppBarNew from '../../Component/Appbar'
function Invest() {
    return (
        <div>
            <AppBarNew />
            <div>
                <img src={image3} className='img3' />
                <div className='p3text'>Invest</div>
                <div className='p3text2'>Want to be a part of our growth phase?</div>
            </div>
            <div className='left'>
                <p className='p3disc'>We are always looking for new smart and engaged <br />people to help Racqy grow further. If you have deep <br />pockets and are interested in investing, you get a <br />firsthand preview of our quarterly reports and <br />statistics of users and economics.   </p>
                <div >
                    <button className='p3button'>Sign up for investor list</button>
                </div>
            </div>
            <img src={img} className='p3img' /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default Invest
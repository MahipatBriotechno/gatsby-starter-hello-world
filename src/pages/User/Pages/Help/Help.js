import React from 'react'
import AppBarNew from '../../Component/Appbar'
import Footer from '../../Component/Footer'
import './Help.css'
import Football from '../../../../images/Football/football.svg'
import Backdrop from '../../../../images/Backdrop/Page8.png'
import Btn1 from '../../../../images/BTN1/btn1.svg'
import Btn2 from '../../../../images/BTN2/Btn2.svg'

function Help() {
    return (
        <div>
            <AppBarNew />
            <div> <img src={Backdrop} className="Backdrop" /></div>
            <div className='backdroptxt1'>Help</div>
            <div className='backdroptxt'>Contact support</div>
            <div><img src={Football} className="Football" /></div>
            <div className='left'>
                <h5 className='h5'>Opening hours</h5>
                <span className='span'>Weekdays: 09-17<br /></span>
                <span className='span'>Saturday: 11-16<br /></span>
                <span className='span'>Holiday & Sunday: Closed</span><br /><hr className='hr' />
                <div>
                    <button className='btn1'><img src={Btn1} className="Btn1" />
                        <span className='btntext1'>+46 7 25 02 25 05</span>  </button>
                </div>
                <div>
                    <button className='btn2'><img src={Btn2} className="Btn2" /><span className='btntext2'>support@racqy.com</span></button>
                </div>
            </div><br />

            <Footer />
        </div>
    )
}

export default Help
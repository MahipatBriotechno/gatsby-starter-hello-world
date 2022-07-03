import React from 'react'
import './PressKit.css'
import image3 from '../../../../images/page2Img/img2.png'
import img from '../../../../images/page2Img/Component.svg'
import Footer from '../../Component/Footer'
import AppBarNew from '../../Component/Appbar'

function PressKit() {
    return (
        <div>
            <AppBarNew />
            <div>
                <img src={image3} className='img3' />
                <div className='p2text'>Press</div>
                <div className='p2text2'>PressKit</div>
            </div>
            <div className='left'>
                <p className='p2disc'>If you by the low chances are interested in writing <br />about us. Down below we have press images. </p>
                <div >
                    <button className='p2button'>Download presskit</button>
                </div>
            </div>
            <img src={img} className='p2img' /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    )
}

export default PressKit
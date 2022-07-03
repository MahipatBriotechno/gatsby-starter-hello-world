import React from 'react'
import AppBarNew from '../../Component/Appbar'
import Footer from '../../Component/Footer'
import img1 from '../../../../images/Main/downloadapp image.png';
import playstore from '../../../../images/Playstore/download-on-the-app-store-apple-logo-svgrepo-com.svg'
import Logo from '../../../../images/LOGO/Group 2639.svg'
import './DownloadApp.css'

function DownloadApp() {
  return (
    <div>
      <AppBarNew />
      <img src={img1} className="img1" />
      <div className='img2'> <img src={Logo} style={{
        width: '100px',
        height: '145px'
      }} /></div>
      <div>
        <p className='line1'>Racqy: Find New Activities & Friends</p>
      </div>
      <img src={playstore} className="playstore" /><br />
      <Footer />
    </div>
  )
}

export default DownloadApp
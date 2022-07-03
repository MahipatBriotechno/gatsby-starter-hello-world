import React from 'react'
import AppBarNew from '../../Component/Appbar'
import Footer from '../../Component/Footer'
import backdrop from '../../../../images/Backdrop/Page6.png'
import './Cookies.css'

function Cookies() {
    return (
        <div>
        <AppBarNew/>
           <div className='part1'>
        <img src={backdrop} className="backdrop"/>
        <div className='imgtxt1'>Legal</div>
        <div className='imgtxt2'>Cookies policy</div>
        </div>
        <div className='part2 div-root'>
          <h1 className='Heading'>Cookies policy</h1>
    
          <p className='pera1'>
          Cookies are essential to ensure that you can use Racqy and its features on a recurring basis. Racqy uses cookies
          when you visit the site. A cookie is a small information capsule that is placed in the user’s computer. The cookie 
          cannot identify you personally, only the web browser you are using to visit the site. The cookie does not contain any
          viruses and cannot alter or remove any other information stored on your computer.
          </p>
    
          <p className='pera2'>
          Racqy uses so-called session cookies. These contain an ID that enables Racqy’s servers to distinguish your web browser from those of other visitors. A session cookie is saved for as long as you are visiting Racqy. As soon as you leave the site or close your web browser your session is deleted and so is your session cookie.
          </p>
          <p className='pera3'>
          For you as a user to be logged in automatically, we use auto-login cookies. Racqy also collects statistics on visits to the site using cookies. The information collected includes data concerning which pages on Racqy have been visited and how long time the user has spent on the site. These statistics do not contain any form of personal information.
          </p>
          <p className='pera4'>
          You have the right to deny Racqy permission to leave cookies on your computer, although in this case, you can no longer use Racqy for functional reasons. You can also choose which level of cookies you wish to allow on your web browser
          </p>
        </div><br/>
        <Footer/>
        </div>
      )
}

export default Cookies
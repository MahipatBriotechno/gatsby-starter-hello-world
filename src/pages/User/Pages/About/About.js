import React from 'react'
import './About.css'
import img from '../../../../images/page1Img/image1.png'
import phone2 from '../../../../images/page1Img/page1phone2.svg'
import phone1 from '../../../../images/page1Img/page1phone1.svg'
import midimg from '../../../../images/page1Img/middleimage.svg'
import quote from '../../../../images/page1Img/quote.svg'
import page1last1 from '../../../../images/page1Img/last1.svg'
import page1last2 from '../../../../images/page1Img/last2.svg'
import one from '../../../../images/page1Img/one.svg'
import two from '../../../../images/page1Img/two.svg'
import three from '../../../../images/page1Img/three.svg'
import Footer from '../../Component/Footer'
import AppBarNew from '../../Component/Appbar'

function About() {
    return (
        <div>
            <AppBarNew />
            <div>
                <img src={img} className='p1img' />
                <div>
                    <img src={phone2} className='p1phone2' /></div>

                <div><img src={phone1} className='p1phone1' /></div>

                <div className='p1text'>About us</div>
                <div className='p1text2'>Do more of what you love</div>

            </div>
            <div className='left'>
                <p className='p1disc1'>Racqy makes it easier for you to meet other people who match <br />your level in sports, thinking and having fun. On our platform you<br /> can find <span className='span0'>thousands of people</span>, whom you do your favourite activity <br />with.
                </p>
                <p className='p1disc'>We strive to be the best platform for all sport-facilities world wide.<br /> Therefore our platform is free to use for everyone. </p>
                <br /><br /><br />
                <button className='p1button'>Create account</button>
            </div>
            <br />
            <div>
                <img src={midimg} className='p1middleimg' /><br />

                <p className='p1middledisc'><img src={quote} className='quote' /><br />I recently moved to Sweden <br />and did not know many people.<br /> Luckily with Racqy, I found my <br />new tennis friends! -Arun</p>
            </div>

            <div><img src={page1last1} className='p1last1img' />
                <img src={page1last2} className='p1last2img' /></div>

            <div className='p1lastdisc'>
                <p className='p1lastdisc1'>For <span className='span1'> all</span> facilities and club owners</p>
                <p className='p1lastdisc2'>With <span className='span2'>Racqy club manager</span>, your facility can <br />among other things:</p>
                <img src={one} className='p1lastbutton1' alt='one'/>
                <p className='p1lastdisc3'>Custom price courts and during specific times</p>
                <img src={two} className='p1lastbutton1' alt='two'/>
                <p className='p1lastdisc4'>Reduce your administration</p>
                <img src={three} className='p1lastbutton1' alt='three'/>
                <p className='p1lastdisc5'>Increase your profitability</p>
            </div>
            <button className='p1lastbutton'> Take me to club page</button><br />
            <img src={quote} className='quote1' />
            <p className='p1lastpara'> <br />I am happy to have made the <br />transition to racqy and now <br />manage my bookings online <br />instead through paperwork!<br />
                - José</p>
            <br /><br />
            <Footer />
        </div>
    )
}

export default About
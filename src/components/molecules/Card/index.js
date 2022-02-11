import {icon1,icon2,icon3,icon4,icon5,icon6 } from '../../../assets';
import './style.css'

const Card = () => {
    return(
        <div className='row mt-5'>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon1} alt='icon1'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>Web Design</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon2}  alt='icon2'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>Bootstrap 4</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon3}  alt='icon3'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>HTML CSS</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon4}  alt='icon4'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>Download Free</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon5}  alt='icon5'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>Get in touch</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={icon6}  alt='icon6'/>
                    </div>
                    <div className='boxElement mt-4'>
                        <b>Spread a word</b>
                    </div>
                    <div className='boxElement mt-2'>
                        <p className='textCard'>Credit goes to <span style={{ color:'#427ce0' }}>Pixels</span> and <span style={{ color:'#427ce0' }}>Raw Pixel</span> for images used in this tamplate. Thank you.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
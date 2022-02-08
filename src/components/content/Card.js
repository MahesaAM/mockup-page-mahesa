import Icon1 from '../../assets/images/icon_01.png';
import Icon2 from '../../assets/images/icon_02.png';
import Icon3 from '../../assets/images/icon_03.png';
import Icon4 from '../../assets/images/icon_04.png';
import Icon5 from '../../assets/images/icon_05.png';
import Icon6 from '../../assets/images/icon_06.png';
import './style.css'
function Card() {
    return(
        <div className='row mt-5 mt-5'>
            <div className='col-lg-4 col-md-6 col-sm-6 col-xs-12 p-1'>
                <div className='cardElement'>
                    <div>
                    <div className='boxElement'>
                    <img width='40' src={Icon1} />
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
                    <img width='40' src={Icon3} />
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
                    <img width='40' src={Icon4} />
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
                    <img width='40' src={Icon5} />
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
                    <img width='40' src={Icon6} />
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
                    <img width='40' src={Icon2} />
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
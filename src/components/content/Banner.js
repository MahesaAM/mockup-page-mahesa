import mainBanner from '../../assets/images/main-banner.jpg';
import './style.css'

function Banner() {
    return(
        <div style={{ backgroundImage: `url(${mainBanner})` }} className='mainBannerStyle'>
            <div className='boxMainBanner'>
                <p className='texheadBox'>Hello, this is your <span style={{ color:'#5259a1' }}>Ramayana</span> Theme</p>
                <p className='textMute mt-2'>AWESOME HTML5 & CSS TEMPLATE</p>
                <p className='textBox mt-3'>Do you know that <span style={{ fontWeight: 'bold' }}>Ramayana</span> is a free to use Bootstrap 4 css template by <span style={{ fontWeight: 'bold' }}>templeto</span>? You can edit and add more pages as you wanted for your personal or corporate website</p>
            </div>
        </div>
    )
}

export default Banner;
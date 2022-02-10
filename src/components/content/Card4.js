import image from '../../assets/images/right-image.jpg';
function Card3() {
    return(
        <div className='row mt-5'>
        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mb-4'>
                <b className='mt-2'>Ante Interdum Reclette</b>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                <button className='btn btn-outline-primary mt-4'>READ MORE</button>            
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                <img className='mb-2' className='w-100' src={image} />
            </div>
            
        </div>
        
    )
}

export default Card3;
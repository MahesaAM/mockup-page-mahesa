import { topImage } from '../../../assets';

const Card2 = () => {
    return(
        <div className='row mt-5'>
            <div className='col-12'>
                <img className='w-100' src={topImage} />
                <div className='my-4'>
                <b>Ante Interdum Chabay</b>
                <p className='my-4 text-mute'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</p>
                <button className='btn btn-outline-primary'>READ MORE</button>
                </div>
            </div>
        </div>
        
    )
}

export default Card2;
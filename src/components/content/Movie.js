const Movie = ({items}) => {
    return(
        <div className='row mt-5'>
            <b>Get From API</b>
            {items.map((item,i) => (
                (i+1) % 2 == 0
                ? (<div className='row mt-5'>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <img className='mb-2' className='w-100' src={item.Poster} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='mt-2'>{item.Title}</h3>
                        <p className='mt-2'>{item.Year}</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                        <button className='btn btn-outline-primary'>WATCH</button>            
                    </div>
                </div>)
                : (<div className='row mt-5'>
                <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <h3 className='mt-2'>{item.Title}</h3>
                        <p className='mt-2'>{item.Year}</p>
                        <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim a</p>
                        <button className='btn btn-outline-primary'>WATCH</button>            
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <img className='mb-2' className='w-100' src={item.Poster} />
                    </div>
                </div>)
            ))}
            </div>
    )
}

export default Movie;
const Movie = ({items}) => {
    return(
        <div className='row mt-5'>
            <b className="mb-5">Get From API</b>
            {items.map((item,i) => (
                <div key={i} className="col-lg-4 col-md-4 col-sm-6 col-6">
                <div className="card mb-3" style={{maxWidth: 540}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={item.Poster} className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <b className="card-title">{item.Title}</b>
                            <p className="card-text">{item.Year}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
            </div>
    )
}

export default Movie;
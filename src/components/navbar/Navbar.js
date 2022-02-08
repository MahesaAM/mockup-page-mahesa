
const Navbar = () => {
    return(
        <nav className="sb-topnav navbar navbar-expand navbar-dark p-0">
            <input type="text" className="search" placeholder="Search" />
            <div className='d-flex w-100 justify-content-between'>
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
            <i className="fas fa-bars"></i></button>
            <div className="navbar-nav ms-auto ms-md-0 me-3 me-lg-0 text-white">
            <p className='mr-20'>RAMAYANA</p>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
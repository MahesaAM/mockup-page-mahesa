import React, {useState} from 'react'

const Navbar = () => {
    const [Click, setClick] = useState(true)
    const handleClick = () => {
        setClick(!Click)
        document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    }
        
    return(
        <nav className="sb-topnav navbar navbar-expand navbar-dark p-0">
            <input type="text" className="search" placeholder="Search" />
            <div className='d-flex w-100 justify-content-between'>
            <button onClick={handleClick} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
            <i className={Click ? 'fas fa-bars' : 'fas fa-times'}></i>
            </button>
            <div className="navbar-nav ms-auto ms-md-0 me-3 me-lg-0 text-white">
            <b className='mr-20'>RAMAYANA</b>
            </div>
            </div>
        </nav>
    )
}

export default Navbar
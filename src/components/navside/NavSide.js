import image from '../../assets/images/featured_post_01.jpg';
function NavSide() {
    return(
        <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav mt-3">
                            <a className="nav-link" href="/">
                                HOMEPAGE
                            </a>
                            <hr />
                            <a className="nav-link" href="/">
                                SIMPLE PAGE
                            </a>
                            <hr />
                            <a className="nav-link" href="/">
                                SHORTCODES
                            </a>
                            <hr />
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts1" aria-expanded="false" aria-controls="collapseLayouts">
                                DROPDOWN ONE
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts1" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <hr/>
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts">
                                DROPDOWN TWO
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                                </nav>
                            </div>
                            <hr/>
                            <a className="nav-link" href="/">
                                EXTERNAL LINK
                            </a>
                        </div>
                        <div className="sb-sidenav-footer mt-5">
                        <p className='mt-4'>Featured Post</p>
                        <hr/>
                        <img className='w-100' src={image} />
                        <p style={{ fontSize: 15 }} className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    </div>
                </nav>
            </div>
    )
}

export default NavSide;
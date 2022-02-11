import {Navbar,NavSide,Content} from "../../components"

const Home = () => {
    return(
        <>
            <Navbar/>
            <div id="layoutSidenav">
            <NavSide/>
            <Content/>
            </div>
        </>
    )
}

export default Home
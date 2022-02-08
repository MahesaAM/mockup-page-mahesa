import Content from "../content/Content"
import Navbar from "../navbar/Navbar"
import NavSide from "../navside/NavSide"

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
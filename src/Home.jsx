
import { useNavigate } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import "./Home.css"

function Home(){
    return(
        <>
           <div className="home">
            <Nav/>
            <div className="middle">
                    <div className="img-container">
                        <img src="/home-1.png"></img>
                    </div>
                    <div className="text-container">
                        <div className="Heading">
                            SIMHACHALAM-NORTH
                        </div>
                        <div className="context">
                                It is a "B" cateogry running room having  50 beds capacity located near to Gopalapatnam Railway Station.
                        </div>
                    </div>
                </div>
                <Footer/>
           </div>
        </>
    )
}

export default Home;
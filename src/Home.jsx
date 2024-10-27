
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
                            Simhachalam North
                        </div>
                        <div className="context">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, commodi vel provident nostrum fugit blanditiis eaque non magnam quasi dignissimos, nam harum voluptas placeat accusamus accusantium ducimus obcaecati ratione fuga?
                        </div>
                    </div>
                </div>
                <Footer/>
           </div>
        </>
    )
}

export default Home;
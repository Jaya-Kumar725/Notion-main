import React from 'react'
import "./Intro.css"
import { BrowserRouter as Router, Link} from 'react-router-dom';
import IntroBody from './IntroBody';
import IntroFooter from './IntroFooter';



function Intro() {
    return (
        <Router>
            {/* navbar */}
            <div className="navbar" style={{ backgroundColor: "white", position: "fixed", width: "100%", display: "flex", flexDirection: "row" }}>
                <p style={{ display: "flex", flex: "1", paddingLeft: "1rem" }}>| - Organization Registration Form</p>
                <p style={{ display: "flex", flex: "2", cursor: "pointer", position: "absolute", marginLeft: "70rem" }}><i class="fas fa-search"></i>&nbsp; Search</p>
                <div className="dropdown" style={{ float: "right;", position: "absolute", left: "75rem" }}>
                    <p class="dropbtn">...|</p>
                    <div class="dropdown-content">
                        <a href="/"><span><img style={{ height: "20px", width: "20px", position: "relative", top: "4px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi__F0XC0sw8LKExnKnuZOwt-Va9AlEshLgsKP1487iKq54TE_TWizO6jeE46QkABiink&usqp=CAU" alt=""></img></span> What is Notion ?</a>
                        <hr></hr>
                        <a href="/"><i class="fas fa-sign-in-alt"></i> Sign up or Login</a>
                        <hr></hr>
                        <a style={{ color: "red" }} href="/"> <i class="far fa-flag"></i> Report page</a>
                    </div>
                </div>
                {/* <div style={{ position: "relative", right: "4rem", bottom: "5px" }}>| </div> */}
                <div className="notion-logo" style={{ position: "relative", right: "3rem", cursor: "pointer"}}><img style={{ height: "30px", width: "30px", position: "relative", top: "20px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi__F0XC0sw8LKExnKnuZOwt-Va9AlEshLgsKP1487iKq54TE_TWizO6jeE46QkABiink&usqp=CAU" alt=""></img><span><p style={{ position: "relative", left: "2rem", bottom: "1.3rem" }}><Link to="/Notion">Notion</Link></p></span></div>
            </div>
        <IntroBody/>
        <IntroFooter/>
        </Router>

    )
}

export default Intro

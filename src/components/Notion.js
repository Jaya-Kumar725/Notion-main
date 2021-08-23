import React from 'react'
import './Notion.css'

function Notion() {
    return (
        <div className="navbar">
            <div className="logo" style={{cursor:"pointer"}}>
                <p><img style={{ height: "35px", width: "35px", paddingBottom: "7px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi__F0XC0sw8LKExnKnuZOwt-Va9AlEshLgsKP1487iKq54TE_TWizO6jeE46QkABiink&usqp=CAU" alt=""></img>  <b>Notion</b></p>
            </div>
            <div className="nav">
                <ul className="nav-list">
                    <li style={{cursor:"none"}}>
                        <div className="dropdown">
                           <button className="dropbtn nav-link">Product <i class="arrow down"></i></button>
                           <div className="dropdown-content">
                             <a href="/">🏠 Home</a>
                             <hr></hr>
                             <a href="/">📘 Team wiki</a>
                             <a href="/">🎒 Projects & tasks</a>
                             <a href="/">✍️ Notes & docs</a>
                             <hr></hr>
                             <a href="/">Teams</a>
                             <a href="/">Enterprise</a>
                             <a href="/">Remote work</a>
                             <a href="/">Personal use</a>
                             <a href="/">Startups</a>
                             <a href="/">Education</a>
                             <hr></hr>
                             <a href="/">Evernote</a>
                             <a href="/">Confluence</a>
                           </div>
                        </div>
                    </li>
                    <li style={{cursor:"default"}}>
                        <div className="dropdown">
                           <button className="dropbtn nav-link">Download <i class="arrow down"></i></button>
                           <div className="dropdown-content">
                             <a href="/">iOS & Android</a>
                             <a href="/">Mac & Windows</a>
                             <a href="/">Web clipper</a>
                           </div>
                        </div>
                    </li>
                    <li style={{cursor:"default"}}>
                        <div className="dropdown">
                           <button className="dropbtn nav-link">Resources <i class="arrow down"></i></button>
                           <div className="dropdown-content">
                             <a href="/">Customer Stories</a>
                             <a href="/">Guides & tutorials</a>
                             <a href="/">Help & support</a>
                             <a href="/">Blog</a>
                             <a href="/">API</a>
                           </div>
                        </div>
                    </li>
                    <li className="nav-item" style={{cursor: "pointer", paddingBottom: "7px"}}>
                        <button className="nav-link">Pricing</button>
                    </li>
                    <li className="nav-item" style={{cursor: "pointer", paddingBottom: "7px"}}>
                        <button className="nav-link">Careers</button>
                    </li>
                    <li className="nav-item">
                        <button style={{color: "rgba(0, 0, 0, button.4)", cursor:"default", paddingBottom: "7px"}}>|</button>
                    </li>
                    <li className="nav-item" style={{cursor: "pointer", paddingBottom: "7px"}}>
                        <button className="nav-link">Log in</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" style={{cursor: "pointer", marginRight:"2rem", paddingBottom: "7px"}}>Sign up</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Notion
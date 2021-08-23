import React from 'react'
import './Notionimg.css'

function Notionimg() {
    return (
           <div className="notion-img">
               <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=640,q=100/front-static/pages/product/hero.png" alt="notion"></img>
               <h1 className="top">All-in-one workspace</h1>
               <h2 className="one">One tool for your whole team. Write, plan, and get organized.</h2>
               <div>
                   <input type="text" placeholder="Enter your email..." />
                   <button className="btn">Sign up</button>
                   <div class="caption">For teams &amp; individuals — web, mobile, Mac, Windows.</div>
               </div>



               <div class="button-wrap">
                   <button class="button active">
                       <div class="button-title">
                           <span class="emoji">📘</span>
                            Team wiki
                        </div>
                    </button>
                    <button class="button">
                        <div class="button-title">
                            <span class="emoji">🎒</span>
                                Projects &amp; tasks
                        </div>
                    </button>
                    <button class="button">
                        <div class="button-title">
                            <span class="emoji">✍️</span>
                                Notes &amp; docs
                        </div>
                    </button>
                </div>


                <h2>Trusted by teams at</h2>
                
                <div class="logos">
                    <div class="logo">
                        <img loading="lazy" width="318" height="96" alt="Loom" src="/front-static/pages/product/loom-logo.png" class="logo logo-limit-height"/>
                    </div>
                    <div class="logo">
                        <img loading="lazy" width="448" height="96" alt="Pixar" src="/front-static/pages/product/pixar-logo.png" class="logo logo-limit-height"/>
                    </div>
                    <div class="logo">
                        <img loading="lazy" width="238" height="96" alt="IBM" src="/front-static/pages/product/ibm-logo.png" class="logo logo-limit-height"/>
                    </div>
                    <div class="logo">
                        <img loading="lazy" width="273" height="96" alt="Nike" src="/front-static/pages/product/nike-logo.png" class="logo logo-limit-height"/>
                    </div>
                    <div class="logo">
                        <img loading="lazy" width="300" height="93" alt="Spotify" src="/front-static/pages/product/spotify-logo-v2.png" class="logo logo-limit-height"/>
                    </div>
                        <div class="logo">
                        <img loading="lazy" width="380" height="96" alt="Slack" src="/front-static/pages/product/slack-logo.png" class="logo logo-limit-height"/>
                    </div>
                </div>
                <div>
                    <h1 className="two">Built to empower every team</h1>
                    <h3 className="three">Notion solves problems unique to every function.</h3>
                </div>
           </div>
    )
}

export default Notionimg

import React from 'react'
import './Grid.css'

function grid() {
    return (
        <div>
        <div class="container grid-center">
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/product.png" alt=""/>
                    <h2>Product</h2>
                    <p>Visualize your product roadmap<br></br>
                       Write feature specs<br></br>
                       Cross-functional collaboration</p>     
                </div>
            </div>
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/engineering.png" alt=""/>
                    <h2>Engineering</h2>
                    <p>Coordinate releases<br></br>
                       Codify processes<br></br>
                       Write docs to ship fast</p>
                </div>
            </div>
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/hr.png" alt=""/>
                    <h2>HR</h2>
                    <p>Create a company wiki<br></br>
                       Answer questions at scale<br></br>
                       Onboard new employees</p>     
                </div>
            </div>
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/design.png" alt=""/>
                    <h2>Design</h2>
                    <p>Track every project<br></br>
                       Catalog logos, fonts, and assets<br></br>
                       Publish a design system</p>     
                </div>
            </div>
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/sales.png" alt=""/>
                    <h2>Sales</h2>
                    <p>Build a flexible CRM<br></br>
                       Organize all meeting notes<br></br>
                       Share a single playbook</p>
                </div>
            </div>
            <div class="card">
                <div class="img-holder">
                    <img src="https://www.notion.so/cdn-cgi/image/f=auto,w=384,q=100/front-static/shared/illustrations/use-case-objects/marketing.png" alt=""/>
                    <h2>Marketing</h2>
                    <p>Make a style guide<br></br>
                       Track your content calendar<br></br>
                       Keep tabs on everything</p>
                </div>
            </div>
        </div>
            <div className="head">
               <h1 className="top">And connect the whole company</h1>
            </div>
            <div className="subhead">
               <h2 className="one">No more context switching or silos.</h2>
            </div>
            <div className="form">
               <input type="text" placeholder="Enter your email..." />
               <button className="btn">Sign up</button>
            </div>
        </div>
    )
}

export default grid

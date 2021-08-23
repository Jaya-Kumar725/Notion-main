import React from 'react'


function IntroFooter() {
    return (
        <div>
            <div className="container" style={{  marginTop: "70rem",position:"absolute",left:"27rem" ,width:"55rem"}}>
                <h1>Dev Requirements:</h1><br></br>
                <div style={{ textAlign: "left",position:"absolute"}}>
                    <p>You can use any frontend framework of your choice. Following are your dev</p>
                    <p> requirements.</p>
                    <p>1. Mockup conversion rate of above 80% percent is expected.</p>
                    <p>2. Form Validations has to be done.</p>
                    <p>3. Once the user clicks on the **Verify** button, all the filled in details has </p>
                    <p>to be stored either in **LocalStorage/PouchDB.**</p>
                    <p>4. After the above step, user has to redirected to a success page which can</p>
                    <p>be a design of your own choice.</p>
                </div>
                <div style={{ textAlign: "left", position: "absolute",top:"24rem"}}>
                    <h2>Review Requirements:</h2>
                    <p>1. Code has to be hosted in <a href="https://www.github.com">https://www.github.com</a>and the link of the repo has to be shared. </p>
                    <p>2. The working demo of the app should be deployed in any of the hosting </p>
                    <p>platform like <a href="heroku">heroku</a>/<a href="netlify">netlify</a>.The link of the working demo has to</p>
                    <p>be shared for review</p>
                    <p>3. Loom / ScreenCast video of you explaining the workflow of the app has to</p>
                    <p>be shared for review.</p>
                </div>
                <div style={{ textAlign: "left", position: "absolute",top:"40rem" }}>
                    <h2>What we are looking for ?</h2>
                    <p>1. An awesome UI engineer with eye for converting mockups to cool apps.</p>
                    <p>2. A clean coder who knows best practices of the industry like SOLID, DRY,</p>
                    <p> Reusability and Scalability.</p>
                    <p>3. A dev who can code with minimal requirements.</p>
                </div>
                <div style={{ textAlign: "left", position: "absolute",top:"53rem" }}>
                    <h2>Time Estimate:</h2>
                    <p>In ideal scenarios, it should take about 8 hours for you wrap up the task, </p>
                    <p>but hey you can take your time but please make sure the deliverables are </p>
                    <p> ready within max of 3 days :)</p>
                    <p>Hope we have covered it all, any queries please send it to <a href="/">hr@squashapps.com</a></p>
                    <p>Looking forward to see some cool stuff from you. Wishing you all the best </p>
                    <p>and Happy Coding!!!</p>
                    <br></br>
                    <p> Talent Acquistion Team</p>
                    <p style={{color:"orange"}}>SquashApps Pvt Ltd</p>
                </div>
            </div>
        </div>
    )
}

export default IntroFooter

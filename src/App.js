import React from 'react'
import Intro from './components/Intro'
import Notion from './components/Notion'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notionimg from './components/Notionimg';
import Grid from './components/Grid';
import IntroImg from './components/IntroImg';



function App() {
  return (
    <Router>
      <Switch>
      {/* <Route path="/Notion" component={Notion,Notionimg}/> */}
      <Route path="/Notion">
        <Notion />
        <Notionimg/>
        <Grid />
        </Route> 
      <Route path="/" >
        <Intro/>
        <IntroImg />
      </Route>

    </Switch>
    </Router>
  )
}

export default App

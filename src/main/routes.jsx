import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dia from '../dia/dia'
import About from '../about/about'


export default props => (
    <Router history={hashHistory}>
        <Route path='/dias' component={Dia} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/Dias' />
    </Router>
)
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Dia from '../dia/dia'
import About from '../about/about'

export default props => (
   <div className='container'>
        <Dia />
        <About />
   </div>
)
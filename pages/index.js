import React from 'react'
import Dater from '../components/dater'
import Self from '../components/self'
import Ticker from '../components/ticker'
import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free'


export default class App extends React.Component{
    render(){
        return(
            <div className='container'>
            <Ticker />
            <Dater />
            <Self />
            </div>
        )
    }

}
import React, { Component } from 'react'
import Contactheader from '../components/Contact/Contactheader'
import Contactform from '../components/Contact/Contactform'

export default class Contactpage extends Component {
    render() {
        return (
            <div>
               <Contactheader />
               <Contactform />
            </div>
        )
    }
}
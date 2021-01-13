import React, { Component } from 'react'
import Homeheader from '../components/Home/Homeheader'
import Homeimage from '../components/Home/Homeimage'


export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Homeheader />
                <Homeimage />
            </div>
        )
    }
}
import React, { Component } from 'react'
import Portfolioheader from '../components/Portfolio/Portfolioheader'
import Portfoliodisplay from '../components/Portfolio/Portfoliodisplay'

export default class Portfoliopage extends Component {
    render() {
        return (
            <div>
                <Portfolioheader />
                <Portfoliodisplay />
            </div>
        )
    }
}
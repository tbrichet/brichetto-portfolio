import React, { Component } from 'react'
import Resumeheader from '../components/Resume/Resumeheader'
import Resumebody from '../components/Resume/Resumebody'

export default class Resumepage extends Component {
    render() {
        return (
            <div>
                <Resumeheader />
                <Resumebody />
            </div>
        )
    }
}
import React, { Component } from 'react'
import {Switch,Route} from "react-router-dom"
import {Test} from "../pages"
export default class Index extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Test} />
            </Switch>
        )
    }
}

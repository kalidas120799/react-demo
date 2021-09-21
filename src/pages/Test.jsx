import React, { Component } from 'react'
import { Test as Testcomponent } from "../components"
import { getRequest } from "../api"

export default class Test extends Component {
    componentDidMount = async () => {
        const allPosts = await getRequest("https://jsonplaceholder.typicode.com/todos?_limit=5")
        console.log(allPosts);
    }
    render() {
        return (
            <  >
                Test
                < Testcomponent />
            </ >
        )
    }
}

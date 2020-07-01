import React, { Component } from 'react'
import './Footer.less'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: props.content || "@liceal | © 2020"
        }
    }
    render() {
        return (
            <div className="footer">
                <p>
                    {this.state.content}
                </p>
            </div>
        )
    }
}

export default Footer
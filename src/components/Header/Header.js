import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Header.less'
/**
 * 顶部
 * 个人头像，选项
 */
class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: props.active || -1,
            name: props.name || 'liceal',
            navs: [{
                url: '/',
                name: '简历'
            }]
        }
    }
    render() {
        return (
            <div className="container">
                <div className="header">
                    <img className="img" src={require('@/static/wx_head.jpg')} alt="header" />
                </div>
                <div className="text">
                    <p className="name">
                        {this.state.name}
                    </p>
                </div>
                <div className="nav">
                    {this.state.navs.map((v, index) => (
                        <Link to={v.url} key={v.name} className={this.state.active == index ? 'active' : ''}>{v.name}</Link>
                    ))}
                </div>
            </div>
        )
    }
}

export default Top
import "./App.css";
import logo from "./logo.svg";

import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// 页面 A
class A extends React.Component {
    render() {
        return <div>page_A</div>
    }
}

// 页面B
class B extends React.Component {
    render() {
        return <div>page_B</div>
    }
}

// 主体
class Wrapper extends React.Component {
    render() {
        return (
            <div style={{textAlign: "center"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <div>
                    <Link className="rLink" to='/page_A'>PAGE_A</Link>
                    <Link className="rLink" to='/page_B'>PAGE_B</Link>
                    <div style={{fontSize: "5vw"}}>
                        {
                            this.props.children
                        }
                    </div>
                </div>
            </div>
        )

    }
}

export default class index extends React.Component {
    render() {
        return (
            // 是否独立运行决定根路径
            <BrowserRouter basename={ window.__POWERED_BY_QIANKUN__ ? '/app-react' : '/' }>
                <Wrapper>
                    <Route path='/page_A' component={ A } />
                    <Route path='/page_B' component={ B } />
                </Wrapper>
            </BrowserRouter>
        )
    }
}

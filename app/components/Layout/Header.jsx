import React from 'react';
import pubsub from 'pubsub-js';
import HeaderRun from './Header.run'
import { NavDropdown, MenuItem, ListGroup, ListGroupItem, Image, FormControl, Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';

import Apis from '../../API/api'

import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../../redux/actions'
import * as commonActionTypes from '../../redux/actionTypes'

// Necessary to create listGroup inside navigation items
class CustomListGroup extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {this.props.children}
            </ul>
        );
    }
}

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loggedIn: Apis.loggedIn(),
            firstname: '',
        }
        if ( this.state.loggedIn ){
            let {user} = Apis.getCurrentUser()
            this.state.firstname = user.firstname
        }

    }


    componentDidMount() {

        HeaderRun();
    }

    componentWillReceiveProps(nextProps){

        let { commonStatus, order } = nextProps
        console.log(nextProps)
        if (commonStatus == commonActionTypes.LOGIN_STATUS) {
            this.setState({ loggedIn: order })
            if ( order == true ){
                let {user}=Apis.getCurrentUser()
                this.setState({firstname: user.firstname})
            }
        }
    }

    toggleUserblock(e) {
        e.preventDefault();
        pubsub.publish('toggleUserblock');
    }

    signout(){
        Apis.logout()
        this.setState({loggedIn:false})
        this.props.commonActions.loginStatus(false)
    }

    // goSignup(){
    //   window.location='https://www.google.com';
    // }

    render() {
        const ddAlertTitle = (
            <span>
                <em className="icon-bell"></em>
                <span className="label label-danger">11</span>
            </span>
        )
        return (
            <header className="topnavbar-wrapper">
                <div className="container">
                    <Navbar className="header_page mine-back-primary" collapseOnSelect fixedTop={true}>
                        <Navbar.Header className="flex-left-center">
                            <Link to="calendars" style={{ flex: 1 }}><img src="img/logo2.png" className="mine-header-logo" /></Link>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            {this.state.loggedIn == false && <Nav pullRight>

                                <NavItem eventKey={1}>
                                    <div className="flex-left">
                                        <Link to="signin" className="font13 mine-font-white text-bold link-warning-item">LOGIN</Link>
                                    </div>
                                </NavItem>
                                
                                <NavItem eventKey={1}>
                                    <div className="flex-left">
                                        <Link to="help" className="font13 mine-font-white text-bold link-warning-item">HELP</Link>
                                    </div>
                                </NavItem>
                            </Nav>}
                            {this.state.loggedIn == true && <Nav pullRight>

                                <NavItem eventKey={1}>
                                    <div className="flex-left">
                                        <Link to="myaccount" className="font13 mine-font-white text-bold link-warning-item">Hi, {this.state.firstname}!</Link>
                                    </div>
                                </NavItem>
                                <NavItem eventKey={1}>
                                    <div className="flex-left">
                                        <Link to="signin" className="font13 mine-font-white text-bold link-warning-item"
                                            onClick={()=>this.signout()}>LOGOUT</Link>
                                    </div>
                                </NavItem>
                                <NavItem eventKey={1}>
                                    <div className="flex-left">
                                        <Link to="help" className="font13 mine-font-white text-bold link-warning-item">HELP</Link>
                                    </div>
                                </NavItem>
                            </Nav>}
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </header >
        );
    }

}

export default connect(props => ({
    commonStatus: props.common.status,
    order: props.common.order,
}),
    (dispatch) => ({
        commonActions: bindActionCreators(commonActions, dispatch),
    })
)(Header);

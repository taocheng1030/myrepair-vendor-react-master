import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, container, Image, Form, Modal } from 'react-bootstrap';
import Apis from '../../API/api';

import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as commonActions from '../../redux/actions'
import * as commonActionTypes from '../../redux/actionTypes'

class Signin extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            err: false,
            showModal: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    signin(e) {
        e.preventDefault()
        e.stopPropagation()

        Apis.login(this.state.username, this.state.password, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.props.history.push('calendars')
                this.props.commonActions.loginStatus(true)
            } else {
                this.setState({ err: true })
            }
        })
    }

    forgotPassword() {
        this.setState({ showModal: true })
    }

    closeModal() {
        this.setState({ showModal: false })
    }

    sendRequest() {
        Apis.forgotPassword(this.state.forgotEmail, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({showModal:false, forgotPassword:''})
                swal("Information!", "Send your request successfully! Check your Inbox.", "success");
            }else{
                swal("Warning!", "Input your email or username correctly.", "warning");
            }
        })
    }

    renderModal() {
        return (
            <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)}>
                <div style={{ padding: 100 }}>
                    <FormControl type="text" placeholder="Email/Username" className="form-control mine-input-bottom-border"
                        value={this.state.forgotEmail} onChange={(e) => this.setState({ forgotEmail: e.target.value })} required />
                    <div className="flex-center-center mt-lg">
                        <Button bsClass="btn btn-oval btn-warning" style={{ height: 40, width: 180 }} onClick={() => this.sendRequest()}>Request New Password</Button>
                        <div style={{ width: 30 }} />
                        <Button bsClass="btn btn-oval btn-default" style={{ height: 40, width: 180 }} onClick={() => this.setState({ showModal: false })}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mine-border-top mt76" style={{minHeight:740}} >
                <div className="container">

                    <Row>
                        <Col sm={5} smPush={7}>
                            <div className="p">
                                <div className="text-center mb-lg pb-lg mt45">
                                    <div className="text-bold mine-title">Sign In</div>
                                    <p className="mine-middle-normal-text">Sign in using your email</p>
                                    <a href="http://mydevicerepair.org/vendor-signup" className="text-muted mine-small-main-text text-bold">Don't have a account?</a>
                                </div>
                                <Form id="signin" onSubmit={(e) => this.signin(e)}>
                                    {this.state.err && <div className="mine-font-danger">Your email and/or password was incorrect</div>}
                                    <FormControl type="email" placeholder="Email" className="form-control mine-input"
                                        value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} required />
                                    <FormControl type="password" placeholder="Password" className="form-control mine-input"
                                        value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} required />
                                    <div className="clearfix mb-lg">
                                        <div className="clearfix">
                                            <div className="checkbox c-checkbox pull-left mt0">
                                                <label className="mine-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" />
                                                    <em className="fa fa-check"></em>Remember Me</label>
                                            </div>
                                            <div className="pull-right">
                                                <Link to="signin" className="text-muted mine-small-main-text text-bold" onClick={() => this.forgotPassword()}>Forgot your password?</Link>
                                            </div>
                                        </div>
                                    </div>

                                    <Button type="submit" bsClass="mine-main-button btn btn-oval btn-warning">Sign In</Button>
                                    {/* <div className="text-center" style={{ marginTop: 20 }}>
                                        <span className="mine-small-normal-text text-bold">New here?</span>
                                        <span><Link to="signup" className="text-muted mine-small-main-text text-bold">Sign up now!</Link></span>
                                    </div> */}
                                </Form>
                            </div>
                        </Col>
                        <Col sm={7} smPull={5} className="mine-border-right">
                            <div className="mt-lg pt-lg">
                                <div className="font24 mine-font-black text-bold mt45">What is MyDeviceRepair?</div>
                                <div className="font18 mine-font-black text-bold mt-lg">Free to sign up online booking system</div>
                                <ul className="mt-lg font16 mine-font-black">
                                    <li>No expensive EPOS systems, unreliable fax solutions or clumsy emails</li>
                                    <li>We help stores with online sales on MyDeviceRepair</li>
                                    <li>Stores receive a new and wider sales channel with unlimited possibilities</li>
                                    <li>MyDeviceRepair has a clean, easy to use website</li>
                                    <li>The website is aimed at anyone who has a digital device who is looking for a fast easy way to find repair stores in their local area.</li>
                                </ul>
                                <div className="font18 mine-font-black text-bold mt-lg">What does MyDeviceRepair.co.uk do?</div>
                                <ul className="mt-lg font16 mine-font-black">
                                    <li> MyDeviceRepair.co.uk provides easy and quick booking process</li>
                                    <li>The customer books repairs from the stores support profile on MyDeviceRepair.co.uk</li>
                                    <li>The store receives the booking via the stores dedicated account, containing all the necessary information - fast and simple</li>
                                    <li>MyDeviceRepair will be aggressively marketing</li>
                                    <li>Local marketing in your area</li>
                                    <li>Top of google search list</li>
                                </ul>
                                <div className="font18 mine-font-black text-bold mt-lg">How can MyDeviceRepair.co.uk help your store to fulfil its highest potential?</div>
                                <ul className="mt-lg font16 mine-font-black">
                                    <li>Save money</li>
                                    <li>Refocus your marketing priorities</li>
                                    <li>Cheapest way to get online bookings without having to "lift a finger" yourself</li>
                                    <li>No need for staff to answer the phone when online!</li>
                                    <li>Save time</li>
                                    <li>Quicker and easier than taking bookings through the phone</li>
                                    <li>No misunderstandings about where and when the device is to be picked up or dropped to store</li>
                                    <li>Earn more money</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div style={{ height: 80 }} />
                {this.renderModal()}
            </div>
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
)(Signin);

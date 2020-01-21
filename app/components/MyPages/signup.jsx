import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Form } from 'react-bootstrap';

import Apis from '../../API/api'
const signupBackImage = require('../../img/mine/signup_back.png')

class Signup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            surname: '',
            town: '',
            postcode: '',
            address1: '',
            address2: '',
            country: '',
            prenum: '',
            phonenumber: '',
            telephone: '',
            email: '',
            confirmEmail: '',

            mismatchErr: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    signup(e) {
        e.preventDefault()
        e.stopPropagation()

        if (this.state.email != this.state.confirmEmail) {
            this.setState({ mismatchErr: true })
            return;
        }

        Apis.register({
            email: this.state.email,
            username: this.state.email,
            postcode: Number(this.state.postcode),
            mobile_phone: this.state.phonenumber,
            tex_phone: this.state.telephone,
            city: this.state.town,
            name: this.state.firstname + ' ' + this.state.surname,
            country: this.state.country,
            address: this.state.address1 + ' ' + this.state.address2
        }, (err, res) => {
            if (err == null) {
                swal("Success!", "You have registered! Please confirm your email", "success")
                this.props.history.push('signin')

            }
            console.log(err, res)
        })
    }

    render() {
        return (
            <div className="mine-back-white mine-border-top mine-border-bottom mt76" style={{minHeight:740}} >
                <div className="container ">

                    <div className="text-center mb-lg pb-lg mt45">
                        <div className="text-bold mine-title">Sign up for free</div>
                    </div>
                    <Form id="signup" onSubmit={(e) => this.signup(e)}>
                        <Row>
                            <Col lg={5} lgOffset={1} md={6}>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">First Name</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border"
                                            value={this.state.firstname} onChange={(e) => this.setState({ firstname: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Surname</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border"
                                            value={this.state.surname} onChange={(e) => this.setState({ surname: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Address</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" className="form-control mine-input-bottom-border"
                                            value={this.state.address1} onChange={(e) => this.setState({ address1: e.target.value })} />
                                        <FormControl type="text" className="form-control mine-input-bottom-border mt-lg"
                                            value={this.state.address2} onChange={(e) => this.setState({ address2: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg mb-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Town</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="London" className="form-control mine-input-bottom-border"
                                            value={this.state.town} onChange={(e) => this.setState({ town: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg mb-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Country</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="Unit Kingdom" className="form-control mine-input-bottom-border"
                                            value={this.state.country} onChange={(e) => this.setState({ country: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg mb-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">PostCode</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="11000" className="form-control mine-input-bottom-border no-spinner"
                                            value={this.state.postcode} onChange={(e) => this.setState({ postcode: e.target.value })} />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} md={6} >
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Mobile Number</span>
                                    </Col>
                                    <Col md={2} sm={3}>
                                        <FormControl type="number" placeholder="+44" className="form-control mine-input-bottom-border no-spinner"
                                            value={this.state.prenum} onChange={(e) => this.setState({ prenum: e.target.value })} />
                                    </Col>
                                    <Col md={7} sm={9}>
                                        <FormControl type="number" placeholder="number only" className="form-control mine-input-bottom-border no-spinner"
                                            value={this.state.phonenumber} onChange={(e) => this.setState({ phonenumber: e.target.value })} />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Telephone</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="number" placeholder="number only" className="form-control mine-input-bottom-border no-spinner"
                                            value={this.state.telephone} onChange={(e) => this.setState({ telephone: e.target.value })} />
                                    </Col>
                                </Row>

                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Email</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="email" placeholder="name@email.com" className="form-control mine-input-bottom-border"
                                            value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                                    </Col>
                                </Row>

                                <Row className="mt-lg mb-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Confirm Email</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="email" placeholder="name@email.com" className="form-control mine-input-bottom-border"
                                            value={this.state.confirmEmail} onChange={(e) => this.setState({ confirmEmail: e.target.value })} />
                                    </Col>
                                </Row>
                                {this.state.mismatchErr && <div className="mine-font-danger">Confirm Email mismatch with email!</div>}

                                <Row className="mt45 mb-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text control-label text-bold">Plan</span>
                                    </Col>
                                    <Col md={9}>
                                        <label className="radio-inline c-radio mt-sm">
                                            <input id="inlineradio1" type="radio" name="i-radio" value="option1" defaultChecked />
                                            <em className="fa fa-circle"></em>Trial</label>
                                        <label className="radio-inline c-radio mt-sm">
                                            <input id="inlineradio2" type="radio" name="i-radio" value="option2" />
                                            <em className="fa fa-circle"></em>Monthly</label>
                                        <label className="radio-inline c-radio mt-sm">
                                            <input id="inlineradio3" type="radio" name="i-radio" value="option3" />
                                            <em className="fa fa-circle"></em>Yearly</label>
                                    </Col>
                                </Row>
                                
                                <div className="flex-center-center" style={{ flexDirection: 'column' }}>
                                    <Button type="submit" bsClass="mine-main-button btn btn-oval btn-warning width370">Sign Up</Button>
                                </div>

                            </Col>
                        </Row>
                    </Form>
                    <Row className="pt-lg">
                        <Col md={8} mdOffset={2}>

                            <div className="text-left" style={{ marginTop: 20 }}>
                                <span className="mine-font-grey font15">When providing your details above, please ensure they are up to date and correct. These will be included on all orders placed and used by the store if collection of your device is selected. By signing up to MyDeviceRepair.co.uk you confirm agreement with our </span>
                                <Link to="terms" className="text-muted mine-small-main-text">Terms and Conditions</Link>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ height: 100 }} />
                </div>
            </div>
        );
    }

};


export default Signup;


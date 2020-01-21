import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

import TimeTable from './timetable'

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class BookingNow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    submitBooking() {
        this.props.history.push('submit-result')
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <div className="container">
                    <div className="flex-center-center mt45">
                        <div className="width670">
                            <TimeTable />
                        </div>
                    </div>

                    <div className="panel panel-primary mt45 mb45">
                        <div className="panel-heading">
                            Confirm Your Drop In Details And Date
                        </div>
                        <div className="panel-body">
                            <Row className="p-lg">
                                <Col lg={6} md={6}>
                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">First Name</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Surname</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Address</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" className="form-control mine-input-bottom-border" />
                                            <FormControl type="text" className="form-control mine-input-bottom-border mt-lg" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg mb-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Town</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="London" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg mb-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Country</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="Unit Kingdom" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg mb-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">PostCode</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="11000" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={6} md={6} >
                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Mobile Number</span>
                                        </Col>
                                        <Col md={2} sm={3}>
                                            <FormControl type="text" placeholder="+65" className="form-control mine-input-bottom-border" />
                                        </Col>
                                        <Col md={7} sm={9}>
                                            <FormControl type="text" placeholder="number only" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>
                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Telephone</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="number only" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>

                                    <Row className="mt-lg">
                                        <Col md={3} className="pt-sm">
                                            <span className="mine-normal-text">Email</span>
                                        </Col>
                                        <Col md={9}>
                                            <FormControl type="text" placeholder="name@email.com" className="form-control mine-input-bottom-border" />
                                        </Col>
                                    </Row>

                                    <div className="mt45">
                                        <div className="flex-center-center">
                                            <div className="fa fa-calendar mr-sm mine-font-warning" />
                                            <div className="mine-font-grey font15 mr-lg">Date :</div>
                                            <div className="font15 mine-font-grey text-bold">13 Jul, 2017</div>
                                        </div>
                                    </div>

                                    <div className="mt">
                                        <div className="flex-center-center">
                                            <div className="fa fa-clock-o mr-sm mine-font-warning" />
                                            <div className="mine-font-grey font15 mr-lg">Time :</div>
                                            <div className="font15 mine-font-grey text-bold">09:00 AM</div>
                                        </div>
                                    </div>

                                    <div className="flex-center-center" style={{ flexDirection: 'column' }}>
                                        <Button bsClass="mine-facebook-button btn btn-oval btn-primary width270 mt45"
                                            onClick={() => this.submitBooking()}>Booking Now</Button>
                                    </div>

                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}


export default BookingNow;

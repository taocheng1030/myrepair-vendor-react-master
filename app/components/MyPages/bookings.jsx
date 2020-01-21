import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import AppHeader from './header'

class Booking extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings: [1, 2, 3, 4, 5]
        }

    }

    componentDidMount() {
        window.scrollTo(0, 104)
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom"  style={{minHeight:740}}>
                <div style={{ position: 'relative' }}>
                    <Image src="img/bg11.jpg" style={{ height: 180, width: '100%', objectFit: 'none' }} />
                </div>
                <AppHeader titles={['My Bookings', 'My Account']} links={['booking', 'myaccount']} cur="My Bookings" />
                <div className="container">
                    <div className="flex-center-center mt45" style={{ flexDirection: 'column' }}>
                        {this.state.bookings.map((item, index) => {
                            return (
                                <div key={index} className={index == 0 ? "panel panel-warning width670" : index == 1 ? "panel panel-danger width670" : "panel panel-primary width670"}>
                                    <div className="panel-heading">
                                        <span className="fa fa-calendar mr" />27 Jul, 2017 <span className="fa fa-clock-o mr"> 2:45 AM</span>
                                        <div className="pull-right">
                                            {index == 0 && <div className="mine-font-white font20 fa fa-spinner" />}
                                            {index == 1 && <div className="mine-font-white font20 icon-close" />}
                                            {index == 2 && <div className="mine-font-white font20 fa fa-check-square-o" />}
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <Row>
                                            <Col sm={6}>
                                                <div className="font24 mine-font-primary">We Support IT</div>
                                                <div className="font15 mine-font-grey">50 Raeburn Avenue Surbiton, Surrey, KT5 9DP</div>
                                                <ul className="mt-lg font16">
                                                    <li><span className="text-bold">Job Reference</span> : D53D-23F4-EAFE-B198</li>
                                                    <li><span className="text-bold">Device</span> : MACBOOK</li>
                                                    <li><span className="text-bold">Operating System</span>: Mavericks</li>
                                                    <li><span className="text-bold">Make</span> : sdfsdf</li>
                                                    <li><span className="text-bold">Model</span> : sdfsdfs</li>
                                                    <li><span className="text-bold">Method</span> : Drop In</li>
                                                    <li><span className="text-bold">Price</span> : £180.00</li>
                                                </ul>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="panel panel-primary">
                                                    <div className="panel-heading">
                                                        Issues
                                                    </div>
                                                    <div className="panel-body">
                                                        <ul>
                                                            <li><span className="text-bold">Hard Drive</span> : 256GB Solid state drive install</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="panel-footer"> <div className="font15 text-bold mine-font-primary mine-pointer"><span className="fa fa-close mr" />Cancel Booking</div></div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        );
    }

}


export default Booking;


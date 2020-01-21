import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class Submit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            services: [
                { icon: 'img/Laptop-green.png', name: 'Samsung Galaxy S4 Mini Data recovery', price: 50.0 },
                { icon: 'img/Mac-green.png', name: 'Samsung Galaxy S4 Mini Keypad or Home...', price: 110.0 },
                { icon: 'img/PC-green.png', name: 'Samsung Galaxy S4 Mini Hearing and ...', price: 15.0 }
            ],
            totalPrice: 0,
            checkItem: [],
            method: 'dropin',
        }
        this.state.services.map((item) => this.state.totalPrice = this.state.totalPrice + item.price)

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {

    }

    done() {
        this.props.history.push('check-out')
    }

    clickService(index) {
        this.state.checkItem[index] = this.state.checkItem[index] == true ? false : true;
        this.setState({ checkItem: [...this.state.checkItem] })
    }

    changeMethod(val) {
        this.setState({ method: val })
    }

    bookingNow() {
        this.props.history.push('booking-now')
    }

    removeItem(index) {
        let totalPrice = this.state.totalPrice - this.state.services[index].price
        this.state.services.splice(index, 1)
        this.setState({ services: [...this.state.services], totalPrice })
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <div className="container">
                    <Row className="mt45 mb45">
                        {this.state.services.map((item, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <div className="flex-center-center m-lg shadow-hover-box mine-normal-cursor"
                                        style={{ flexDirection: 'column', borderColor: '#eee', borderWidth: 1, borderStyle: 'solid' }}
                                        onClick={() => this.clickService(index)}>
                                        <Image src={item.icon} style={{ width: 200, height: 300, objectFit: 'contain', objectPosition: '0 0px' }} />
                                        <div className="text-center"
                                            style={{ position: 'absolute', top: 200, width: 200 }}>
                                            <div className="font14 text-bold mine-font-grey" >{item.name}</div>
                                        </div>
                                        <div className="text-center"
                                            style={{ position: 'absolute', bottom: 30 }}>
                                            <div className="font20 mine-font-primary text-bold" >£ {item.price}</div>
                                        </div>
                                        <div style={{ position: 'absolute', top: 30, right: 50 }}>
                                            <div className="font24 mine-font-danger fa fa-close service-close mine-pointer"
                                                onClick={() => this.removeItem(index)} />
                                        </div>

                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="text-nowrap">
                        {this.state.method == 'collect' && <Button bsClass="btn btn-pill-left btn-primary width170"><span className="fa fa-check mr" />Collect</Button>}
                        {this.state.method != 'collect' && <Button bsClass="btn btn-pill-left btn-default width170"
                            onClick={() => this.changeMethod('collect')}>Collect</Button>}
                        {this.state.method == 'dropin' && <Button bsClass="btn btn-pill-right btn-warning width170"><span className="fa fa-check mr" />Drop In</Button>}
                        {this.state.method != 'dropin' && <Button bsClass="btn btn-pill-right btn-default width170"
                            onClick={() => this.changeMethod('dropin')}>Drop In</Button>}
                    </div>
                    <Row className="mt-lg">
                        <Col lg={2} sm={3}>
                            <div className="font16 mine-font-grey mt-lg text-bold">Additional Comment</div>
                        </Col>
                        <Col lg={8} sm={9}>
                            <FormControl type="text" placeholder="Please enter additional comments relating to this repair here." className="form-control mine-input-bottom-border" />
                        </Col>
                    </Row>
                    <div className="font36 mine-font-warning text-bold mt-lg">Estimate : £ {this.state.totalPrice}</div>
                    <Row className="mt45">
                        <Col sm={4} smOffset={4} className="flex-center-center mb45">
                            {this.state.services.length > 0 && <div className="mine-normal-button mine-back-primary mine-font-white width270 font14 height50 text-nowrap font16"
                                onClick={() => this.bookingNow()}>Booking Now</div>}
                            {this.state.services.length == 0 && <div className="mine-normal-button mine-back-primary mine-font-white width270 font14 height50 text-nowrap font16"
                                onClick={() => this.goBack()}><span className="fa fa-arrow-left mr"/>Back</div>}

                        </Col>
                    </Row>
                </div>

            </div>
        );
    }

}


export default Submit;


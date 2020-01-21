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

class SelectService extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            services: [
                { icon: 'img/Laptop-green.png', name: 'Samsung Galaxy S4 Mini Data recovery', price: 50.0 },
                { icon: 'img/Mac-green.png', name: 'Samsung Galaxy S4 Mini Keypad or Home...', price: 110.0 },
                { icon: 'img/PC-green.png', name: 'Samsung Galaxy S4 Mini Hearing and ...', price: 15.0 },
                { icon: 'img/Tablet-green.png', name: 'Samsung Galaxy S8 Screen repair', price: 345.0 },

                { icon: 'img/SmartPhone-green.png', name: 'Smartphone', price: 35.0 },
                { icon: 'img/Mac-green.png', name: 'iMac', price: 13.0 },
                { icon: 'img/SmartPhone-green.png', name: 'iPhone', price: 250.0 },
                { icon: 'img/Tablet-green.png', name: 'iPad', price: 150.0 },
            ],
            checkItem: [],
        }

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

    addService(){
        this.props.history.push("submit")
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <div className="container">
                    <Row className="mt45 mb45">
                        {this.state.services.map((item, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <div className="flex-center-center m-lg mine-pointer shadow-hover-box"
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
                                        <div style={{ position: 'absolute', top: 30, left: 50 }}>
                                            {!this.state.checkItem[index] && <div className="font24 mine-font-primary fa fa-square-o" />}
                                            {this.state.checkItem[index] && <div className="font24 mine-font-danger fa fa-check-square-o" />}
                                        </div>

                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                    <Row>
                        <Col sm={4} smOffset={4} className="flex-center-center mb45">
                        <div className="mine-normal-button mine-back-warning mine-font-white width270 font14 height50 text-nowrap"
                            onClick={()=>this.addService()}>SELECT & CONTINUE</div>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }

}


export default SelectService;


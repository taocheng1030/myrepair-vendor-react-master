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

class SelectDevice extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            devices:[
                { icon: 'img/Laptop-green.png', name: 'Laptop PC' },
                { icon: 'img/Mac-green.png', name: 'Macbook' },
                { icon: 'img/PC-green.png', name: 'Desktop PC' },
                { icon: 'img/Tablet-green.png', name: 'Tablet' },

                { icon: 'img/SmartPhone-green.png', name: 'Smartphone' },
                { icon: 'img/Mac-green.png', name: 'iMac' },
                { icon: 'img/SmartPhone-green.png', name: 'iPhone' },
                { icon: 'img/Tablet-green.png', name: 'iPad' },
            ]
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {

    }

    selectMake(index){
        this.props.history.push('select-make')
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <div className="container">
                    <Row className="mt45 mb45">
                        {this.state.devices.map((item, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <div className="flex-center-center m-lg mine-pointer shadow-hover-box" 
                                        style={{ flexDirection: 'column', borderColor:'#eee', borderWidth:1, borderStyle:'solid' }}
                                        onClick={()=>this.selectMake(index)}>
                                        <Image src={item.icon} style={{ width: 200, height: 300, objectFit: 'contain', objectPosition:'0 0px' }} />
                                        <div className="text-center font22 text-bold mine-font-warning" 
                                            style={{position:'absolute', top:230}}>
                                            {item.name}
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>

            </div>
        );
    }

}


export default SelectDevice;


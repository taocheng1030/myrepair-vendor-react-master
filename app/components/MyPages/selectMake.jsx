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

class SelectMake extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            deviceIcon: 'img/SmartPhone-green.png',
            makes:[
                'Apple',
                'samsung',
                'Oneplus',
                'Sony',
                'Google Nexus',
                'HTC',
                'Nokia'
            ]
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {

    }

    selectModel(index){
        this.props.history.push('select-model')
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <div className="container">
                    <Row className="mt45 mb45">
                        {this.state.makes.map((item, index) => {
                            return (
                                <Col key={index} lg={3} md={4} sm={6}>
                                    <div className="flex-center-center m-lg mine-pointer shadow-hover-box" 
                                        style={{ flexDirection: 'column', borderColor:'#eee', borderWidth:1, borderStyle:'solid' }}
                                        onClick={()=>this.selectModel(index)}>
                                        <Image src={this.state.deviceIcon} style={{ width: 200, height: 300, objectFit: 'contain', objectPosition:'0 0px' }} />
                                        <div className="text-center font22 text-bold mine-font-warning" 
                                            style={{position:'absolute', top:230}}>
                                            {item}
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


export default SelectMake;


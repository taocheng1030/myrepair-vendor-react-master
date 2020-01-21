import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')

class CreateNewEvent0 extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/create_event.png" style={{ height: 300, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <Row>
                            <Col sm={8} smOffset={2}>
                                <div className="mine-back-title">Create New Event</div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Row className="mt45">
                    <Col sm={8} smOffset={2}>
                        <div className="ml60">
                            <div className="font14 mine-font-warning text-bold">Events</div>
                            <div className="font48 mine-font-grey">Connect your community in JacksGoGo!</div>
                            <div className="font18 mine-font-grey mt">Join millions already JacksGoGo!</div>
                            <div className="font24 mine-font-grey text-bold mb-lg mt45">Choose a category for your event</div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/boiler.png" />
                            <div className="font22 mine-font-black mt mb">Cooking &<br /> Baking</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/book.png" />
                            <div className="font22 mine-font-black mt mb">Education</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/exploration.png" />
                            <div className="font22 mine-font-black mt mb">Exploration</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/family.png" />
                            <div className="font22 mine-font-black mt mb">Family</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/gardening.png" />
                            <div className="font22 mine-font-black mt mb">Gardening</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/leisure.png" />
                            <div className="font22 mine-font-black mt mb">Leisure</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/social.png" />
                            <div className="font22 mine-font-black mt mb">Social</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/baseball-bg.png" />
                            <div className="font22 mine-font-black mt mb">Sports</div>
                        </div>
                    </Col>
                </Row>
                <div style={{height:40}}/>
            </div>
        );
    }

}


export default CreateNewEvent0;


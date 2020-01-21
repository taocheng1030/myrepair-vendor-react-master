import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')

class PostNewJob0 extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative', backgroundColor: 'rgb(245,245,245)' }}>
                    <Image src="img/mine/jobs_post.png" style={{ height: 800, width: '100%', objectFit: 'none', objectPosition: 'top right' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title-black">Post New Job</div>
                        </div>
                    </div>
                </div>
                <div className="container mt45">
                    <div className="ml60">
                        <div className="font14 mine-font-warning text-bold">JOBS</div>
                        <div className="font48 mine-font-grey">Post your jobs on JacksGoGo!</div>
                        <div className="font18 mine-font-grey mt">Join millions already JacksGoGo!</div>
                        <div className="font24 mine-font-grey text-bold mb-lg mt45">Choose a category for your job:</div>
                    </div>
                </div>
                <Row className="mt-lg">
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
                            <Image src="img/mine/tools.png" />
                            <div className="font22 mine-font-black mt mb">Handyman</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/brush-bg.png" />
                            <div className="font22 mine-font-black mt mb">Household<br />Chores</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/messenger.png" />
                            <div className="font22 mine-font-black mt mb">Messenger</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/runner.png" />
                            <div className="font22 mine-font-black mt mb">Running<br />Man</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/baseball-bg.png" />
                            <div className="font22 mine-font-black mt mb">Sports</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/more.png" />
                            <div className="font22 mine-font-black mt mb">Other<br />Professions</div>
                        </div>
                    </Col>
                </Row>
                <div style={{height:40}}/>
            </div>
        );
    }

}


export default PostNewJob0;


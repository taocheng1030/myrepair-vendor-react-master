import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewService4 extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/service_post.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title">Post New Service</div>
                        </div>
                    </div>
                </div>
                <div className="container mt45">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image src="img/mine/brush.png" className="mr-lg" />
                        <div style={{ position: 'relative', width: '100%' }}>
                            <span className="mine-normal-text mine-vertical-bottom">Household Chores</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                        <span className="font24 mine-font-success text-bold">
                            <em className="font18 icon-arrow-left mr30 pr" />
                            Describe<Image src="img/mine/dot_line.png" className="mr ml" />
                            Price<Image src="img/mine/dot_line.png" className="mr ml" />
                            Time Slot<Image src="img/mine/dot_line.png" className="mr ml" />
                            Address
                        <em className="font18 icon-arrow-right ml30 pl" />
                        </span>

                    </div>
                    <div className="font18 mine-font-grey text-bold mb-lg mt45">
                        Where is your service based at?
                        </div>
                    <Row>
                        <Col lg={2} className="pt-sm">
                            <span className="mine-normal-text">Place Name</span>
                        </Col>
                        <Col lg={9}>
                            <FormControl type="text" placeholder="Optional" className="form-control mine-input-bottom-border" />
                        </Col>
                    </Row>
                    <Row className="mt-lg">
                        <Col lg={2} className="pt-sm">
                            <span className="mine-normal-text">Unit</span>
                        </Col>
                        <Col lg={9}>
                            <FormControl type="text" placeholder="Unit" className="form-control mine-input-bottom-border" />
                        </Col>
                    </Row>
                    <Row className="mt-lg">
                        <Col lg={2} className="pt-sm">
                            <span className="mine-normal-text">Street</span>
                        </Col>
                        <Col lg={9}>
                            <FormControl type="text" placeholder="Street" className="form-control mine-input-bottom-border" />
                        </Col>
                    </Row>
                    <Row className="mt-lg mb-lg">
                        <Col lg={2} className="pt-sm">
                            <span className="mine-normal-text">Postcode</span>
                        </Col>
                        <Col lg={9}>
                            <FormControl type="text" placeholder="Postcode" className="form-control mine-input-bottom-border" />
                        </Col>
                    </Row>


                    <Row className="pt-lg">
                        <Col lg={3}>
                            <div className="clearfix mb-lg mine-success-check">
                                <div className="checkbox c-checkbox pull-left mt0">
                                    <label className="mine-small-normal-text">
                                        <input type="checkbox" value="" name="remember" className="mine-check-box" />
                                        <em className="fa fa-check mr"></em>Don't show my full address.</label>
                                </div>
                            </div>

                            <Button bsClass="mine-success-button  btn btn-oval btn-success">Go To Summary</Button>
                        </Col>
                    </Row>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default PostNewService4;


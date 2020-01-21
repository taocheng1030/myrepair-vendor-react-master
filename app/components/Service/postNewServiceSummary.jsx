import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewServiceSummary extends React.Component {

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

                    <div className="font22 mine-font-black mt45">Summary</div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-success font24 text-bold">Describe</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">Dog Walk</div>
                            <div className="font14 mine-font-grey mt-lg">Professional dog walker. All my furry clients love me!</div>
                            <div className="mine-image-270 mt-lg pt-lg"></div>
                            <div className="flex-left mt-lg pt-lg">
                                <Button bsClass="btn btn-oval btn-success btn-outline small-button">gardening</Button>
                                <Button bsClass="btn btn-oval btn-success btn-outline ml small-button">landscaping</Button>
                                <Button bsClass="btn btn-oval btn-success btn-outline ml small-button">horticulture</Button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-left mt45">
                        <div className="width270 mine-font-success font24 text-bold">Price</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">$ 50.0</div>
                        </div>
                    </div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-success font24 text-bold">Time Slot</div>
                        <div>
                            <Button bsClass="btn btn-oval btn-success btn-outline mine-default-button width270">View Time Slots</Button>
                        </div>
                    </div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-success font24 text-bold">Address</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">2 Jurong West Avenue 5 649841</div>
                        </div>
                    </div>
                    <div className="mt45 pt-lg">
                        <Button bsClass="btn btn-oval btn-success width270 height70 font18 text-bold">Post Service</Button>
                    </div>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default PostNewServiceSummary;


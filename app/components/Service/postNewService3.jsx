import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewService3 extends React.Component {

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
                        Does your service have time slots available?
                    </div>
                    <div className="mt-lg">
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline width170">
                            No time slots</Button>
                        <br />
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline mt-lg width370">
                            1 person at a time(e.g. tasks)</Button>
                        <br />
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline mt-lg width370">
                            Multiple people at a time(e.g. classes)</Button>
                    </div>
                    <div className="font18 mine-font-grey mb-lg mt45">
                        This will create a service with time slots
                    </div>
                    <div className="font18 mine-font-grey text-bold mb-lg mt-lg">
                        Do you want to set time slots now or later?
                    </div>

                    <div className="mt-lg">
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline width170">
                            Now</Button>
                        <br />
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline mt-lg width170">
                            Later</Button>
                    </div>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default PostNewService3;


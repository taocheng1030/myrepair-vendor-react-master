import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewQuickJob3 extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/quick_job.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title">Post New Quick Job</div>
                        </div>
                    </div>
                </div>
                <div className="container mt45">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image src="img/mine/quick_icon.png" className="mr-lg" />
                        <div style={{ position: 'relative', width: '100%' }}>
                            <span className="mine-normal-text mine-vertical-bottom">Quick Jobs</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                        <span className="font24 mine-font-info text-bold">
                            <em className="font18 icon-arrow-left mr30 pr" />
                            Describe<Image src="img/mine/dot_line.png" className="mr ml" />
                            Time<Image src="img/mine/dot_line.png" className="mr ml" />
                            Address<Image src="img/mine/dot_line.png" className="mr ml" />
                            Budget<Image src="img/mine/dot_line.png" className="mr ml" />
                            Report
                            <em className="font18 icon-arrow-right ml30 pl" />
                        </span>

                    </div>
                    <div className="font18 mine-font-grey text-bold mb-lg mt45">
                        Choose how you want to verify the completed work.
                        </div>
                    <div className="mt-lg">
                        <div className="clearfix mine-info-check">
                            <div className="checkbox c-checkbox pull-left mt0">
                                <label className="font16 text-bold mine-small-normal-text">
                                    <input type="checkbox" value="" name="remember" className="mine-check-box" />
                                    <em className="fa fa-check mr"></em>Before & After Photo</label>
                            </div>
                        </div>
                        <div className="font16 mine-font-grey ml-lg pl">Take photos before the start of your work, and then after the end to show the work result</div>

                        <div className="clearfix mt45 mine-info-check">
                            <div className="checkbox c-checkbox pull-left mt0">
                                <label className="font16 text-bold mine-small-normal-text">
                                    <input type="checkbox" value="" name="remember" className="mine-check-box" />
                                    <em className="fa fa-check mr"></em>Geotracking</label>
                            </div>
                        </div>
                        <div className="font16 mine-font-grey ml-lg pl">Track where you begin at the start of your work, and every 10 minutes, until you reach your destination.</div>

                        <div className="clearfix mt45 mine-info-check">
                            <div className="checkbox c-checkbox pull-left mt0">
                                <label className="font16 text-bold mine-small-normal-text">
                                    <input type="checkbox" value="" name="remember" className="mine-check-box" />
                                    <em className="fa fa-check mr"></em>PIN Code</label>
                            </div>
                        </div>
                        <div className="font16 mine-font-grey ml-lg pl">Useful for delivery jobs. The recipient should be given the code beforehand to confirm</div>

                    </div>
                    <div className="mt45 pt-lg">
                        <Button bsClass="btn btn-oval btn-info width270 height70 font18 text-bold">Next</Button>
                    </div>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default PostNewQuickJob3;


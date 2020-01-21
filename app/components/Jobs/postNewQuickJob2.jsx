import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewQuickJob2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            minutes: 10,
            seconds: 41,
            AP: 'AM',
        }
    }

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
                        What do you need the services?
                        </div>
                    <div>
                        <label className="radio-inline c-radio">
                            <input id="inlineradio1" type="radio" name="i-radio" value="option1" defaultChecked />
                            <em className="fa fa-circle"></em><span className="font16 mine-font-black ml">Before</span></label>
                        <label className="radio-inline c-radio ml60">
                            <input id="inlineradio2" type="radio" name="i-radio" value="option2" />
                            <em className="fa fa-circle"></em><span className="font16 mine-font-black ml">On</span></label>
                        <label className="radio-inline c-radio ml60">
                            <input id="inlineradio3" type="radio" name="i-radio" value="option3" />
                            <em className="fa fa-circle"></em><span className="font16 mine-font-black ml">After</span></label>
                    </div>

                    <div className="flex-left mt45" style={{ alignItems: 'center' }} >
                        <div>
                            <div className="icon-arrow-up mine-font-info text-center text-bold font18 mine-pointer" />
                            <FormControl type="text" className="form-control info-border width70 height50 mt-lg font18 text-bold text-center" value={10} />
                            <div className="icon-arrow-down mine-font-info text-center text-bold font18 mt-lg mine-pointer" />
                        </div>
                        <div className="ml mr">:</div>
                        <div>
                            <div className="icon-arrow-up mine-font-info text-center text-bold font18 mine-pointer" />
                            <FormControl type="text" className="form-control info-border width70 height50 mt-lg font18 text-bold text-center" value={40} />
                            <div className="icon-arrow-down mine-font-info text-center text-bold font18 mt-lg mine-pointer" />
                        </div>
                        <div className="mine-back-info font16 text-bold mine-font-white ml-lg mine-pointer"
                            style={{ height: 40, width: 40, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            AM
                            </div>
                        <div className="mine-font-info font16 text-bold ml mine-pointer"
                            style={{ height: 40, width: 40, borderRadius: 20, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            PM
                            </div>
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


export default PostNewQuickJob2;


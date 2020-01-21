import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewJob1 extends React.Component {

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
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image src="img/mine/brush.png" className="mr-lg" />
                        <div style={{ position: 'relative', width: '100%' }}>
                            <span className="mine-normal-text mine-vertical-bottom">Household Chores</span>
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
                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Give your job a short title.
                        </div>
                        <FormControl type="text" placeholder="Optional" className="form-control mine-input-bottom-border" />
                    </div>

                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Describer the job you need done
                            </div>
                        <FormControl type="text" placeholder="eg. I have 10 years experience" className="form-control mine-input-bottom-border" />
                    </div>
                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Add tags to your job(optional)
                            </div>
                        <FormControl type="text" placeholder="separate tags by comma" className="form-control mine-input-bottom-border" />
                    </div>

                    <div className="mt-lg pt-lg">
                        <Button bsClass="mine-info-outline-button  btn btn-oval btn-info btn-outline width270 pl35">
                            <Image src="img/mine/camera_icon.png" className="pull-left" />Add Photos(Optional)</Button>
                    </div>
                    <div className="flex-left mt-lg pt-lg">
                        <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                        <div className="mine-image-270 ml"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                    </div>

                    <Button bsClass="mine-default-button btn btn-oval btn-default width270 mt-lg">Next</Button>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default PostNewJob1;


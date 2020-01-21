import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class MakeAProposal extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative', backgroundColor: 'rgb(229,229,220)' }}>
                    <Image src="img/mine/job_proposal.png" style={{ height: 800, width: '100%', objectFit: 'none', objectPosition: 'top right', zIndex: 1000 }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title-black">Make A Proposal</div>
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
                            Bid<Image src="img/mine/dot_line.png" className="mr ml" />
                            Rescheduling<Image src="img/mine/dot_line.png" className="mr ml" />
                            Cancellation
                        <em className="font18 icon-arrow-right ml30 pl" />
                        </span>

                    </div>
                    <div className="font18 mine-font-grey text-bold mb-lg mt45">
                        You have expressed an interest in the job
                        </div>
                    <div className="font15 mine-font-grey mt-lg pt-lg mine-border-bottom pb45" >
                        "Need someone to deliver a small parcel from West Jurong to Bagan Datoh. Parcel size is 30x15x10 cm, weights 2kg."
                        </div>
                    <div className="font18 mine-font-grey text-bold mb-lg mt45">
                        Explain briefly how you can help with the job
                        </div>
                    <FormControl type="text" placeholder="e.g. I have 5+ years of experience" className="form-control mine-input-bottom-border" />
                    <div style={{ height: 50 }} />
                    <Button bsClass="mine-default-button btn btn-oval btn-default width270">Next</Button>
                </div>
                <div style={{ height: 60 }} />
            </div>
        );
    }

};


export default MakeAProposal;


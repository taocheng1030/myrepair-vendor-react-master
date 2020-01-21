import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewJobSummary extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeModal() {
        this.setState({ showModal: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showModal} onHide={this.closeModal.bind(this)} id="show-point">
                    <div className="text-center">
                        <div className="font22 mine-font-grey mt45">Job Posted</div>
                        <div className="font14 mine-font-grey mt45">Job reference no.: j38291-11<br />Good Luck!</div>
                        <div className="mt45 pb45" style={{ width: '100%', textAlign: '-webkit-center' }}>
                            <div className="mine-info-small-button pt-sm text-bold mine-pointer" onClick={() => this.closeModal()}>Invite Service Provider</div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
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

                    <div className="font22 mine-font-black mt45">Summary</div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-info font24 text-bold">Describe</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">Fast Food Delivery</div>
                            <div className="font14 mine-font-grey mt-lg">Can you help with delivering 50boxes of chicken rice to my office?</div>
                            <div className="flex-left">
                                <div className="mine-image-270 mt-lg pt-lg"></div>
                                <div className="mine-image-270 mt-lg pt-lg ml-lg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-left mt45">
                        <div className="width270 mine-font-info font24 text-bold">Time</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">Before 12:00 PM Today</div>
                        </div>
                    </div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-info font24 text-bold">Address</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">Pick-up Location: 2 Jurong West Avenue 5 649482<br />
                                Drop-off Location: 2-3-1, Jurong West Avenue 4 649482</div>
                        </div>
                    </div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-info font24 text-bold">Budget</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">$ 170.00</div>
                        </div>
                    </div>
                    <div className="flex-left mt45">
                        <div className="width270 mine-font-info font24 text-bold">Report</div>
                        <div>
                            <div className="font18 mine-font-grey text-bold">PIN Code</div>
                        </div>
                    </div>

                    <div className="mt45 pt-lg">
                        <Button bsClass="btn btn-oval btn-info width270 height70 font18 text-bold"
                            onClick={() => this.setState({ showModal: true })}>Post New Quick Job</Button>
                    </div>
                </div>
                <div style={{ height: 60 }} />
                {this.renderModal()}
            </div>
        );
    }

};


export default PostNewJobSummary;


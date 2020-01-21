import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';
import ReactStars from 'react-stars'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class EventDetails extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            endDate: null,
            showModal1: false,
            data: [
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 3 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: '', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: 'Declined', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: "$ 95.0", content: "Rejected", status1: 1, status2: 3 },
            ],
            decorators: null,
        }
    }
    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeModal() {
        this.setState({ showModal1: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showModal1} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>All Attendees</div>
                            <div className="flex-left">
                                <span className="line-height-35">Sort by: </span>
                                <FormControl componentClass="select" name="account" className="form-control mine-filter-option" >
                                    <option>Ratings</option>
                                    <option>Distance</option>
                                </FormControl>
                            </div>
                            <Image src="img/mine/button_close_round_green.png" style={{objectFit:'none'}} className="mine-pointer ml30" onClick={() => this.closeModal()} />
                        </div>
                        <div className="mt45">

                            {this.state.data.map((item, index) =>
                                <div key={index} className="flex-left-center p-lg mine-border-bottom">
                                    <Image src="img/user/02.jpg" className="circle-avatar-100" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="mine-font-primary font15 text-bold">
                                            {item.name}
                                        </div>
                                        <div className="mine-font-grey font14">
                                            <div className="pull-left mr">
                                                <ReactStars
                                                    count={5}
                                                    size={20}
                                                    half={true}
                                                    value={item.rating}
                                                    edit={false}
                                                    color2={'#ffd700'} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="font14 mine-font-grey">Main Organiser</div>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76">
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/goclub_back.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />

                </div>
                <div className="container mt45">
                    <Row>
                        <Col sm={9} className="pb45">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image src="img/mine/baseball-bg.png" className="mr-lg" style={{ width: 50, height: 50 }} />
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <span className="mine-normal-text mine-vertical-bottom">Sports</span>
                                </div>
                            </div>
                            <div className="font36 mine-font-grey text-bold mt-lg">Football Ole Ole</div>
                            <div className="font15 mine-font-grey mr30 pr30 mt45">
                                We are experts at gardening & landscaping. Please state in your quotation: size of your garden, what tasks you need done, and any special requirements
                                </div>
                            <div className="mine-font-grey font16 mt">
                                <em className="icon-people mr"></em>
                                <span>23,231</span>
                            </div>
                            <div className="flex-left-top mt45">
                                <Image src="img/mine/icon_location.png" className="mr mt-sm" />
                                <div style={{ flex: 1 }}>
                                    <div className="font15 mine-font-grey text-bold">Jurong Community Center</div>
                                    <div className="font15 mine-font-grey">10 Jurong Road #05-33 408600</div>
                                </div>
                                <div className="font18 mine-font-primary mine-pointer flex-left-bottom">View Map</div>
                            </div>
                            <div className="flex-left mt-lg pt-lg">
                                <Button bsClass="btn btn-oval btn-primary btn-outline small-button">gardening</Button>
                                <Button bsClass="btn btn-oval btn-primary btn-outline ml small-button">landscaping</Button>
                                <Button bsClass="btn btn-oval btn-primary btn-outline ml small-button">horticulture</Button>
                            </div>
                            <div style={{ width: '100%', height: 1, backgroundColor: 'lightgrey', marginRight: -15, marginTop: 30 }} />
                            <div className="flex-left-center mt45">
                                <Image src="img/mine/ball.png" className="img-circle mr-lg" style={{ objectFit: 'none', width: 64, height: 64 }} />
                                <div className="font18 mine-font-primary text-bold">Football Ole Ole</div>
                            </div>
                            <div className="flex-left-center mt45">
                                <div className="progress-bar" style={{ borderRadius: 20 }}>
                                    <div className="bar positive font22" style={{ borderRadius: 20, width: '50%' }}>
                                        <span>25/50 people have joined!</span>
                                    </div>
                                    <div className="bar negative font22" style={{ width: '50%' }}>
                                        <span>25/50 people have joined!</span>
                                    </div>
                                </div>
                                <div style={{ flex: 1 }} />
                                <div className="font18 mine-font-primary text-bold mine-pointer" onClick={() => this.setState({ showModal1: true })}>View Attendees</div>
                            </div>
                            <div style={{ width: '100%', height: 1, backgroundColor: 'lightgrey', marginRight: -15, marginTop: 30 }} />
                            <div className="font22 mine-font-black mt45">Updates</div>
                            <div className="font14 mine-font-grey mt-lg">By <span className="text-bold">Alan.Tam</span> on 10 Jul, 2017</div>
                            <div className="font15 mine-font-black">Lunch will be chicken rice</div>
                            <div className="font14 mine-font-grey mt45">By <span className="text-bold">Alan.Tam</span> on 10 Jul, 2017</div>
                            <div className="font15 mine-font-black">Attendees please bring your own tools.</div>
                        </Col>
                        <Col sm={3} className="pt-lg pl-lg mine-border-left">
                            <div className="text-center">
                                <Image src={avatar_image} className="img-circle thumb128" />
                                <div className="mt-lg">
                                    <p className="font18 mine-font-grey">Owner</p>
                                </div>
                                <div className="mt-lg">
                                    <p className="font18 mine-font-black text-bold">Alan. Tam</p>
                                </div>
                            </div>
                            <div className="text-center mt45">
                                <Image src="img/user/01.jpg" className="img-circle thumb96" />
                                <div className="mt-lg">
                                    <p className="font18 mine-font-grey">Admin</p>
                                </div>
                                <div className="mt-lg">
                                    <p className="font18 mine-font-black text-bold">CYYong</p>
                                </div>
                            </div>
                            <div className="mine-font-warning font16 mt-lg">
                                <span>10 people have joined this event recently!</span>
                            </div>
                            <div className="mt-lg">
                                <Button bsClass="mine-primary-button btn btn-oval btn-primary width270">Join Event</Button>
                            </div>
                            <div className="text-center mt-lg">
                                <Button bsClass="btn btn-oval btn-primary btn-outline mine-default-button width270">View All Reviews</Button>
                            </div>

                            <div className="pb45">
                                <div className="mt45 pt-lg">
                                    <div className="font16 mine-font-grey">Share</div>
                                    <div className="flex-left mt">
                                        <div className="mine-social-icon">
                                            <em className="fa fa-facebook" />
                                        </div>
                                        <div className="mine-social-icon">
                                            <em className="fa fa-twitter" />
                                        </div>
                                        <div className="mine-social-icon">
                                            <em className="fa fa-google" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="font20 mine-font-grey mt45">
                                Event reference no.:S3892<br />
                                Created on 12 May, 2017
                                </div>

                            <div className="mt45">
                                <div className="font15 mine-font-grey text-bold">Active Group</div>
                                <div className="font15 mine-font-grey">Latest reponse: 10 min agao</div>
                            </div>
                            <div className="font15 mine-font-primary text-bold mt45 mine-pointer">Report Event</div>
                        </Col>
                    </Row>
                </div>
                <div className="mine-back-primary-opacity flex-row" style={{ width: '100%' }}>
                    <div className="container flex-row mt45 mb45">
                        <div className="flex-left-center flex-grow-1">
                            <div>
                                <div className="font48 mine-font-primary">Have a similar service?</div>
                                <div className="font30 mine-font-black">Start listing your services with us now!</div>
                            </div>
                        </div>
                        <div className="flex-right-center flex-grow-1">
                            <Button bsClass="btn btn-oval btn-primary width270 height70 font18 text-bold">Post Service</Button>
                        </div>
                    </div>
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default EventDetails;


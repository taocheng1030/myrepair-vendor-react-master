import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';
import ReactStars from 'react-stars'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class GoclubDetails extends React.Component {

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

    renderItem(item, index) {
        return (
            <div className="mb-lg mt-lg height-100">
                <img alt="Mail Avatar" src="img/user/01.jpg" className="avatar-100 pull-left mr30" />

                <div className="mb-mail-meta">
                    <div className="pull-left">
                        <div className="mine-font-primary font15 text-bold">
                            <Image src={baseball} className="mr" />
                            Football Match
                        </div>
                        <div className="mine-font-grey font13 mt mb">
                            <em className="icon-clock mr"></em>
                            <span>16 Jul, 2017 10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="mine-font-grey font13">
                            <em className="fa fa-map-marker mr"></em>
                            <span>Ole Ole Bola</span>
                        </div>
                        <div className="mine-font-warning font13 mt8">
                            <span>10 people have joined this event recently!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }



    closeModal() {
        this.setState({ showModal1: false, showModal2: false, showModal3: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showModal1} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Past Events</div>
                            <div className="flex-left">
                                <span className="line-height-35">Sort by: </span>
                                <FormControl componentClass="select" name="account" className="form-control mine-filter-option" >
                                    <option>Ratings</option>
                                    <option>Distance</option>
                                </FormControl>
                            </div>
                            <Image src="img/mine/button_close_round_green.png" style={{ objectFit: 'none' }} className="mine-pointer ml30" onClick={() => this.closeModal()} />
                        </div>
                        <div className="mt45">

                            {this.state.data.map((item, index) =>
                                <div key={index} className="mine-border-bottom">
                                    {this.renderItem(null, index)}
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal2} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Request Sent!</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">The admins have been notified of your request.</span>
                        </div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-button mine-back-primary mine-font-white flex-center-center">Done</div>
                        </div>
                    </div>
                </Modal>

                <Modal show={this.state.showModal3} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Join this GoClub?</div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-button flex-center-center">Cancel</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-button mine-back-primary mine-font-white flex-center-center">Join</div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }


    render() {
        return (
            <div className="mine-back-white mine-border-bottom pb45 mt76">
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/goclub_back.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />

                </div>
                <div className="container mt45">
                    <Row>
                        <Col sm={9} className="mine-border-right pb45">
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
                            <div className="flex-left mt-lg pt-lg">
                                <Button bsClass="btn btn-oval btn-primary btn-outline small-button">gardening</Button>
                                <Button bsClass="btn btn-oval btn-primary btn-outline ml small-button">landscaping</Button>
                                <Button bsClass="btn btn-oval btn-primary btn-outline ml small-button">horticulture</Button>
                            </div>
                            <div className="mt45">
                                <div className="font22 mine-font-black">Events</div>
                                <div className="mine-border-bottom">
                                    {this.renderItem(null, 0)}
                                </div>
                                <div className="mine-border-bottom">
                                    {this.renderItem(null, 1)}
                                </div>
                            </div>

                            <div className="text-center mt45">
                                <Button bsClass="btn btn-oval btn-primary btn-outline mine-default-button width270"
                                    onClick={() => this.setState({ showModal1: true })}>View Past Events</Button>
                            </div>
                        </Col>
                        <Col sm={3} className="pt-lg pl-lg">
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
                                <Button bsClass="mine-primary-button btn btn-oval btn-primary width270"
                                    onClick={()=>this.setState({showModal2:true})}>Request To Join GoClub</Button>
                            </div>

                            <div className="font20 mine-font-grey mt45">
                                GoClub reference no.:S3892<br />
                                Created on 12 May, 2017
                                </div>

                            <div className="mt45">
                                <div className="font15 mine-font-grey text-bold">Active Group</div>
                                <div className="font15 mine-font-grey">Latest reponse: 10 min agao</div>
                            </div>
                            <div className="font16 mine-font-primary text-bold mine-pointer mt45 mb45"
                                onClick={()=>this.setState({showModal3:true})}>Report GoClub</div>
                        </Col>
                    </Row>
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default GoclubDetails;


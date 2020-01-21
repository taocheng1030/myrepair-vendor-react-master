import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            categories: [
                { icon: 'img/mine/boiler_middle.png', title: 'Cooking & Baking', value: true },
                { icon: 'img/mine/education_middle.png', title: 'Education', value: false },
                { icon: 'img/mine/exploration_middle.png', title: 'Exploration', value: true },
                { icon: 'img/mine/family_middle.png', title: 'Family', value: true },

                { icon: 'img/mine/gardening_middle.png', title: 'Gardening', value: true },
                { icon: 'img/mine/leisure_middle.png', title: 'Leisure', value: false },
                { icon: 'img/mine/social_middle.png', title: 'Social', value: true },
                { icon: 'img/mine/baseball_middle.png', title: 'Sports', value: true },
            ],
            locations: [
                { title: 'Bagan Datoh', value: true },
                { title: 'Eunos', value: false },
                { title: 'Jurong East', value: true },
                { title: 'Jurong West', value: true },
            ],
            creditHistory: [
                { date: '11 June, 2017', number: 'J38291', person: 'Alan. Tam', type: 0, price: 30 },
                { date: '11 June, 2017', number: 'J38291', person: 'Alan. Tam', type: 1, price: 130 },
                { date: '11 June, 2017', number: 'J35691', person: 'Alan. Tam', type: 0, price: 430 },
                { date: '11 June, 2017', number: 'J38291', person: 'Alan. Tam', type: 1, price: 330 },
                { date: '11 June, 2017', number: 'J38291', person: 'Alan. Tam', type: 0, price: 310 },
                { date: '11 June, 2017', number: 'J38291', person: 'Alan. Tam', type: 1, price: 1330 },
            ],
            showProfileModal: false,
            showCreditModal: false,
            showRegionModal: false
        }

        this.handlePageChanged = this.handlePageChanged.bind(this);

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }
    renderItem(item, index) {
        return (
            <div className="mb-lg mt-lg">
                <img alt="Mail Avatar" src="img/user/01.jpg" style={{ height: 200, width: 270 }} />

                <div className="mt-lg">
                    <div className="mine-font-primary font15 text-bold">
                        <Image src="img/mine/social.png" className="mr thumb16" />
                        We love happy garden!
                    </div>
                    <div className="mine-font-grey font13 mt mb">
                        <span>Happy Garden, Jurong West.</span>
                    </div>
                    <div className="mine-font-grey font13">
                        <em className="icon-people mr"></em>
                        <span>288</span>
                    </div>
                </div>
            </div>
        )
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }

    closeModal() {
        this.setState({ showProfileModal: false, showCreditModal: false, showRegionModal: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showProfileModal} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-1100">
                    <Image src="img/mine/profile_back.png" style={{ height: 500, width: '100%', objectFit: 'cover' }} />
                    <Image src="img/mine/warning_close.png" className="mine-pointer" onClick={() => this.closeModal()} style={{ position: 'absolute', top: 50, right: 50 }} />
                    <div style={{ padding: 80 }}>

                        <div className="font36 mine-font-grey text-bold">Rose Lim</div>
                        <div className="flex-left">
                            <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                <ReactStars
                                    count={5}
                                    size={40}
                                    half={true}
                                    value={3.5}
                                    edit={false}
                                    color2={'#ffd700'} />
                            </div>
                            <div style={{ width: '100%' }} />

                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt-lg">See All Reviews</Button>
                            </div>
                        </div>
                        <div className="font16 mine-font-grey mt45">College student with a car. Usually free in the afternoon.</div>
                        <div className="mine-font-grey font16 mt">
                            <em className="fa fa-map-marker mr"></em>
                            <span>Jurong West</span>
                        </div>
                        <div className="flex-left mt45">
                            <Button bsClass="btn btn-oval btn-warning btn-outline small-button">gardening</Button>
                            <Button bsClass="btn btn-oval btn-warning btn-outline ml small-button">landscaping</Button>
                            <Button bsClass="btn btn-oval btn-warning btn-outline ml small-button">horticulture</Button>
                        </div>
                        <div className="mt45">
                            <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width400 mt-lg height70">See All Reviews</Button>
                        </div>
                    </div>
                </Modal>

                <Modal show={this.state.showCreditModal} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-1100">
                    <div style={{ padding: 80 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ width: '100%' }}>Credit History</div>
                            <Image src="img/mine/warning_close.png" onClick={() => this.closeModal()} className="mine-pointer" />
                        </div>
                        <div className="flex-left mine-border-bottom mine-border-top mt-lg pt pb">
                            <div className="font13 mine-font-grey" style={{ width: '100%' }}>Details</div>
                            <div className="font13 mine-font-grey" style={{ width: 100 }}>Added ($)</div>
                            <div className="font13 mine-font-grey" style={{ width: 100 }}>Used ($)</div>
                        </div>
                        <div>
                            {this.state.creditHistory.map((item, index) => {
                                return (
                                    <div key={index} className="flex-left mine-border-bottom mt-lg pt pb">
                                        <div style={{ width: '100%' }}>
                                            <div className="font13 mine-font-grey">{item.date}</div>
                                            <div className="font15 mine-font-black">{item.type ? 'Outgoing payment to' : 'Incoming payment from '}
                                                <span className="text-bold">{item.person}</span></div>
                                            <div className="font13 mine-font-black">
                                                Job. Ref. No. {item.number}
                                            </div>
                                        </div>
                                        <div className="font15 mine-font-black text-bold" style={{ width: 100, display: 'flex', alignItems: 'center' }}>{item.type ? item.price : 0}</div>
                                        <div className="font15 mine-font-black text-bold" style={{ width: 100, display: 'flex', alignItems: 'center' }}>{item.type ? 0 : item.price}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <Pager
                            total={this.state.total}
                            current={this.state.current}
                            visiblePages={this.state.visiblePage}
                            titles={{ first: 'First', last: this.state.total }}
                            className="pagination-sm pull-left mine-pointer"
                            onPageChanged={this.handlePageChanged}
                        />
                    </div>
                </Modal>
                <Modal show={this.state.showRegionModal} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius">
                    <div style={{ padding: 50 }} className="text-center">
                        <div className="font22 mine-font-grey">
                            Change Region
                        </div>
                        <div className="font16 mine-font-black text-bold mt45">
                            Your current active region is
                        </div>
                        <Image src="img/mine/singapore2.png" className="mt-lg" />
                        <div className="font22 mine-font-black text-bold mt-lg">Singapore</div>
                        <div className="font16 mine-font-grey mt45">You can only view content from Singapore. To view content form other countries, activate your other region account</div>
                        <div className="mt45 pt-lg">
                            <Button bsClass="btn btn-oval btn-warning width400 height70 font18 text-bold">Activate Malaysia Account</Button>
                        </div>
                        <div className="mt45 pb45" style={{ width: '100%', textAlign: '-webkit-center' }}>
                            <div className="mine-default-small-button pt-sm text-bold mine-pointer" onClick={() => this.closeModal()}>CANCEL</div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div className="mine-back-white mine-border-top mine-border-bottom mt76" style={{minHeight:740}}>
                <div style={{ display: 'relative' }}>
                    <Image src="img/mine/profile_back.png" style={{ height: 600, width: '100%', objectFit: 'none' }} />
                </div>
                <div className="container">
                    <Row className="mine-border-bottom pb-lg">
                        <Col lg={3} sm={6} className="text-center">
                            <Image src={avatar_image} style={{ width: 170, height: 170, borderRadius: '50%', marginTop: -85 }} />

                            <div className="font22 mine-font-black text-bold mt-lg pt">
                                Rose Lim
                                </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt-lg"
                                    onClick={() => this.setState({ showProfileModal: true })}>View Public Profile</Button>
                            </div>
                        </Col>

                        <Col lg={3} sm={6} className="text-center">
                            <div className="font14 mine-font-grey text-bold" style={{ marginTop: 75 }}>
                                Region
                                </div>
                            <div className="font22 mine-font-black text-bold mt-lg">
                                Singapore
                                </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt-lg"
                                    onClick={() => this.setState({ showRegionModal: true })}>Change Region</Button>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="text-center">
                            <div className="font14 mine-font-grey text-bold" style={{ marginTop: 75 }}>
                                Credit
                                </div>
                            <div className="font22 mine-font-black text-bold mt-lg">
                                150$
                                </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt-lg"
                                    onClick={() => this.setState({ showCreditModal: true })}>View Credit History</Button>
                            </div>
                        </Col>
                        <Col lg={3} sm={6} className="text-center">
                            <div className="font14 mine-font-grey text-bold" style={{ marginTop: 75 }}>
                                Jacks$
                                </div>
                            <div className="font22 mine-font-black text-bold mt-lg">
                                120$
                                </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt-lg">View Jacks$ History</Button>
                            </div>
                        </Col>
                        
                    </Row>

                    <Row className="mine-border-bottom">
                        
                        <Col sm={3} smPush={9} className="pl0 pt-lg pb45">

                            <div className="mt-lg pt-lg">
                                <div className="mine-menu-item mine-menu-selected-warning">
                                    <span className="mine-font-warning">Profile Details</span>
                                </div>
                                <div className="mine-menu-item">
                                    <span>Joined GoClubs</span>
                                </div>
                                <div className="mine-menu-item">
                                    <span>Service Listing</span>
                                </div>
                                <div className="mine-menu-item">
                                    <span>Payment Method</span>
                                </div>
                                <div className="mine-menu-item">
                                    <span>Withdraw Credit</span>
                                </div>
                            </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width200 mt45 ml60">Remove This Card</Button>
                            </div>
                        </Col>

                        <Col sm={9} smPull={3} className="mine-border-right pb45">
                            <div className="mine-border-bottom pb45">
                                <div className="font22 mine-font-black mt45">
                                    <span>Personal Details</span>
                                    <em className="fa fa-pencil ml-lg mine-font-warning" />
                                </div>
                                <div className="font14 mine-font-grey letter-space-3 text-bold mt45">ADDRESS.</div>
                                <div className="font14 mine-font-grey mt-lg pt-lg">2 Jurong West Avenue 5 649382</div>

                                <div className="flex-left">
                                    <div>
                                        <div className="font14 mine-font-grey letter-space-3 text-bold mt45">PHONE</div>
                                        <div className="font14 mine-font-grey mt-lg pt-lg">+65 1234 5678</div>
                                    </div>
                                    <div className="ml60">
                                        <div className="font14 mine-font-grey letter-space-3 text-bold mt45">EMAIL</div>
                                        <div className="font14 mine-font-grey mt-lg pt-lg">rose.lim@gmail.com</div>
                                    </div>
                                </div>

                                <div className="font14 mine-font-grey letter-space-3 text-bold mt45">INFO</div>
                                <div className="font14 mine-font-grey mt-lg pt-lg">College student with a car. Usually free in the afternoon</div>
                            </div>
                            <div>
                                <div className="font22 mine-font-black mt45">
                                    <span>Personal Details</span>
                                    <em className="fa fa-pencil ml-lg mine-font-warning" />
                                </div>
                                <div className="font14 mine-font-grey letter-space-3 text-bold mt45">BUSINESS NAME</div>
                                <div className="font14 mine-font-grey mt-lg pt-lg">Rose Enterprise</div>

                                <div className="font14 mine-font-grey letter-space-3 text-bold mt45">CERTIFICATIONS</div>
                                <div className="font14 mine-font-grey mt-lg pt-lg">Degree of SPCA Academy for Dog Trainers</div>

                                <div className="font14 mine-font-grey letter-space-3 text-bold mt45">TAGS</div>
                                <div className="flex-left mt-lg pt-lg">
                                    <Button bsClass="btn btn-oval btn-warning btn-outline small-button">gardening</Button>
                                    <Button bsClass="btn btn-oval btn-warning btn-outline ml small-button">landscaping</Button>
                                    <Button bsClass="btn btn-oval btn-warning btn-outline ml small-button">horticulture</Button>
                                </div>
                            </div>

                        </Col>
                    </Row>
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default Profile;


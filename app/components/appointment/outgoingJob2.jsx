import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import Pager from 'react-pager';
import ReactStars from 'react-stars'

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')
import AppHeader from './header'

class AppointmentOutgoingJob2 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
            data: [
                { name: 'CYYong', rating: 3.5, price: '$ 100', content:'', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content:'', status1: 1, status2: 3 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content:'', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: '', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: 'Declined', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: "$ 95.0", content:"Rejected", status1: 1, status2: 3 },
            ]
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeModal() {
        this.setState({ showModal1: false, showModal2: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showModal1} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Proposal</div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <table className="table mb-mails mine-border-bottom">
                            <tbody>
                                <div className="mb-lg mt-lg height-100" style={{ position: 'relative' }}>
                                    <img alt="Mail Avatar" src="img/user/02.jpg" className="circle-avatar-100 pull-left mr30" />
                                    <div className="mb-mail-meta">
                                        <div className="pull-left mine-jumbotron">
                                            <div className="mine-font-grey font15 text-bold">
                                                CY Yong
                                            </div>
                                            <div className="mine-font-grey font14">
                                                <div className="pull-left mr">
                                                    <ReactStars
                                                        count={5}
                                                        size={20}
                                                        half={true}
                                                        value={3.5}
                                                        edit={false}
                                                        color2={'#ffd700'} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </tbody>
                        </table>
                        <div>
                            <div className="font15 mine-font-grey">We are experts at gardening & landscaping. Please state in your quotation: size of your gard, what tasks you need noe, and any special requirements.</div>
                            <div className="flex-left-top mt45">
                                <Image src="img/mine/icon_budget.png" style={{ objectFit: 'none' }} />
                                <div className="font15 mine-font-grey ml-lg">
                                    <div className="text-bold">$ 100</div>
                                    <div>- Our own supplies $ 20</div>
                                </div>
                            </div>
                            <div className="flex-left mt45">
                                <Image src="img/mine/icon_reschedule.png" style={{ objectFit: 'none' }} />
                                <div className="font15 mine-font-grey ml-lg"><span className="text-bold">Rescheduling:</span> at least 1 day before.</div>
                            </div>

                            <div className="flex-left mt45">
                                <Image src="img/mine/icon_cancellation.png" style={{ objectFit: 'none' }} />
                                <div className="font15 mine-font-grey ml-lg"><span className="text-bold">Cancellation:</span> at least 1 day before</div>
                            </div>

                            <div className="font15 mine-font-grey mt45">Proposal reference no: P3829</div>
                            <div className="font15 mine-font-grey">Posted on 12 May, 2017</div>
                        </div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-button flex-center-center">Reject Bid</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-button flex-center-center">Accept Bid</div>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal2} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Service Providers</div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <div className="mt45">

                            {this.state.data.map((item, index) =>
                                <div key={index} className="flex-left-center p-lg mine-border-bottom">
                                    <Image src="img/user/02.jpg" className="circle-avatar-100" />
                                    <div className="ml-lg" style={{flex:1}}>
                                        <div className="mine-font-success font15 text-bold">
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
                                    <div className="ml-lg"  style={{flex:1}}>
                                        {item.price&&<div>{item.price}</div>}
                                        {item.content&&<div>{item.content}</div>}
                                    </div>
                                    <div className="ml-lg">
                                        <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt"
                                            style={{ width: 100, height: 50 }}><Image src="img/mine/button_proposal_white.png"/></Button>
                                    </div>
                                    <div className="ml-lg">
                                        <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt"
                                            style={{ width: 100, height: 50 }}><Image src="img/mine/button_chat1.png"/></Button>
                                    </div>
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
            <div className="mine-back-white mine-border-bottom mine-border-top mt76" >
                <div className="container">
                    <Row>

                        <Col sm={3} smPush={9}>
                        </Col>
                        <Col sm={9} smPull={3}>
                            <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                                <Image src="img/mine/brush.png" className="mr-lg" />
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <span className="mine-normal-text mine-vertical-bottom">Household Chores</span>
                                </div>
                            </div>
                            <div className="font36 mine-font-grey text-bold mt-lg">Maid Needed</div>
                            <div className="mine-font-grey font22">
                                On 18 Jul, 2017 10:00 AM - 12:30 PM
                            </div>
                            <div className="mt45 pt-lg" style={{ position: 'relative' }}>
                                <div style={{ width: 2, height: 100, position: 'absolute', top: 30, left: 22 }} className="mine-back-success zIndex0" />
                                <div className="flex-left-center">
                                    <Image src="img/mine/provider_mid.png" className="zIndex100" />
                                    <div className="font15 text-bold mine-font-black ml-lg" style={{ flex: 1 }}>You have received 1 new quotation</div>
                                    <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt" onClick={() => this.setState({ showModal1: true })}
                                        style={{ width: 150, height: 35 }}>View Quotations</Button>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/document_mid.png" className="zIndex100 mine-back-white" />
                                    <div className="font15 text-bold mine-font-black ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">12 Jul, 2017 8:16 PM</div>
                                        <div className="font15 mine-font-black">You posted this ongoing job in jobs</div>
                                    </div>
                                    <div className="font15 text-bold mine-font-success mine-pointer" onClick={() => this.setState({ showModal2: true })}>View</div>
                                </div>
                            </div>

                            <div style={{ height: 60 }} />
                        </Col>
                    </Row>

                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default AppointmentOutgoingJob2;


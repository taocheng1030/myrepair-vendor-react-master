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

class AppointmentOutgoingJob10 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false,
            showModal6: false,
            data: [
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 3 },
                { name: 'CYYong', rating: 3.5, price: '$ 100', content: '', status1: 1, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: '', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: '', content: 'Declined', status1: 0, status2: 0 },
                { name: 'CYYong', rating: 3.5, price: "$ 95.0", content: "Rejected", status1: 1, status2: 3 },
            ]
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeModal() {
        this.setState({ showModal1: false, showModal2: false, showModal3: false, showModal4: false, showModal5: false, showModal6: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showModal1} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
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
                <Modal show={this.state.showModal2} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Service Providers</div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <div className="mt45">

                            {this.state.data.map((item, index) =>
                                <div key={index} className="flex-left-center p-lg mine-border-bottom">
                                    <Image src="img/user/02.jpg" className="circle-avatar-100" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
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
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        {item.price && <div>{item.price}</div>}
                                        {item.content && <div>{item.content}</div>}
                                    </div>
                                    <div className="ml-lg">
                                        <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt"
                                            style={{ width: 100, height: 50 }}><Image src="img/mine/button_proposal_white.png" /></Button>
                                    </div>
                                    <div className="ml-lg">
                                        <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt"
                                            style={{ width: 100, height: 50 }}><Image src="img/mine/button_chat1.png" /></Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal3} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Request Sent!</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">catherinedesilva will be notified of the rescheduling, and be asked to respond</span>
                        </div>
                        <div>
                            <Button bsClass="text-bold btn btn-oval btn-success mine-back-success mt45"
                                style={{ width: 100, height: 35 }}>OK</Button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal4} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Delete Job?</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">Let catherinedesilva know why you are cancelling the job.</span>
                        </div>
                        <div className="pr-lg pl-lg mb-lg" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Email address" className="form-control mine-input" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="flex-center-center mt-lg">
                            <div className="mine-normal-button flex-center-center">Cancel</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-danger-button flex-center-center">Delete</div>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal5} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey">18 Jul, 2017, 9:46 AM</span></div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <div className="flex-left-center mt-lg pt-lg">
                            <div className="mine-image-270 mr-lg" />
                            <div className="mine-image-270 mr-lg" />
                        </div>
                        <div className="mt45" >
                            <div className="mine-font-grey font15">Comments:</div>
                            <div className="mine-font-black font15">There ia bald spot near the back gate. The dog  was digging when I got here.</div>
                        </div>
                        <div className="mt45 pt-lg">
                            <div className="mine-font-grey font18 text-bold">Billable Item</div>
                            <div className="mine-font-black font15 flex-left text-bold">
                                <div className="width270 mr-lg">Grass seeds</div>
                                <div>$ 20</div>
                            </div>
                            <div className="mine-font-black font15 flex-left">
                                <div className="width270 mr-lg mine-font-grey">Received request:</div>
                                <div>19 Jul, 2017 10:00 AM</div>
                            </div>
                            <div className="mine-font-black font15 flex-left">
                                <div className="width270 mr-lg mine-font-grey">Approved request:</div>
                                <div>19 Jul, 2017 10:00 AM</div>
                            </div>
                        </div>
                        <div className="font22 mine-font-black mt45 pt-lg" style={{ flex: 1 }}>
                            End Job<span className="font14 mine-font-grey">18 Jul, 2017, 9:46 AM</span></div>
                        <div className="flex-left-center mt-lg pt-lg">
                            <div className="mine-image-270 mr-lg" />
                            <div className="mine-image-270 mr-lg" />
                            <div className="mine-image-270 mr-lg" />
                        </div>
                        <div className="mt-lg">
                            <div className="mine-font-grey font15">Comments:</div>
                            <div className="mine-font-black font15">Fixed the bald spot.</div>
                            <div className="mine-font-black font15">The root of your bonsai is rotting. I saved as much as could</div>
                        </div>
                        <div className="mt45 font15 mine-font-grey">
                            Job reference no.: J38291
                            <br />Posted on 12 May, 2017
                        </div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-success-button flex-center-center">Verify That The Job Is Completed</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-button flex-center-center">Not The Case? Dispute</div>
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

                        <Col sm={3} smPush={9} className="pt-lg pl-lg pb45">
                            <div className="text-center">
                                <Image src={avatar_image} className="img-circle thumb128" />
                                <div className="mt-lg">
                                    <p className="font18 mine-font-black text-bold">Alan. Tam</p>
                                </div>
                                <div className="mt45">
                                    <div>
                                        <div className="mine-normal-button mine-back-warning mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal3: true })}>
                                            <span className="font16 text-bold mine-font-white">Job Report</span>
                                            <Image src="img/mine/button_jobreport.png" style={{ position: 'absolute', left: 20, top: 5 }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mine-normal-button mine-back-warning mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal4: true })}>
                                            <span className="font16 text-bold mine-font-white">Invoice</span>
                                            <Image src="img/mine/button_invoice.png" style={{ position: 'absolute', left: 20, top: 5 }} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="mine-normal-button mine-back-warning mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal4: true })}>
                                            <span className="font16 text-bold mine-font-white">Rehire</span>
                                            <Image src="img/mine/button_rehire.png" style={{ position: 'absolute', left: 20, top: 5 }} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mine-normal-button mine-back-success mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal5: true })}>
                                            <Image src="img/mine/button_chat2.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mine-normal-button mine-back-success mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal6: true })}>
                                            <Image src="img/mine/button_proposal_white.png" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col sm={9} smPull={3} className="mine-border-right">
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
                            <div className="pt-lg mr-lg" style={{ position: 'relative' }}>
                                <div style={{ height: 170, position: 'absolute', top: 80, left: 22 }} className="mine-line-grey zIndex0" />
                                <div style={{ height: 80, position: 'absolute', top: 260, left: 22 }} className="mine-line-grey zIndex0" />
                                <div style={{ height: 250, position: 'absolute', top: 360, left: 22 }} className="mine-line-grey zIndex0" />
                                <div style={{ height: 80, position: 'absolute', top: 630, left: 22 }} className="mine-line-grey zIndex0" />
                                <div style={{ height: 80, position: 'absolute', top: 730, left: 22 }} className="mine-line-grey zIndex0" />
                                <div style={{ height: 80, position: 'absolute', top: 820, left: 22 }} className="mine-line-grey zIndex0" />
                                <div className="flex-left-top mt45 ml-sm">
                                    <Image src="img/mine/icon_verified@2x.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="flex-left-down">
                                            <div style={{ flex: 1 }}>
                                                <div className="font15 mine-font-grey mt-sm">13 Jul, 2017 4:16 PM</div>
                                                <div className="font15 mine-font-black">You have given CYYong a review.</div>
                                            </div>
                                            <div className="font15 text-bold mine-font-success mine-pointer" onClick={() => this.setState({ showModal2: true })}>View</div>
                                        </div>
                                        <div className="flex-left-down">
                                            <div style={{ flex: 1 }}>
                                                <div className="font15 mine-font-grey mt45">13 Jul, 2017 4:16 PM</div>
                                                <div className="font15 mine-font-black">CYYong has given you a review.</div>
                                            </div>
                                            <div className="font15 text-bold mine-font-success mine-pointer" onClick={() => this.setState({ showModal2: true })}>View</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/icon_startwork_inactive@2x.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">You have given CYYong a tip of 120pts</div>
                                    </div>
                                </div>
                                <div className="flex-left-top mt45 ml-sm">
                                    <Image src="img/mine/icon_reviewed_inactive@2x.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">CYYong has completed the work. You have 3 days to verify work</div>
                                        <div className="font15 mine-font-grey mt45">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">You have verified the work</div>
                                        <div className="font15 mine-font-grey mt45">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">CYYong has completed the work.</div>
                                    </div>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/icon_tipped_inactive@2x.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">CYYong has started the work</div>
                                    </div>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/icon_appointment@2x.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black text-bold">Appointment confirmed</div>

                                    </div>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/provider_mid.png" className="zIndex100 mine-back-white" />
                                    <div className="ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">13 Jul, 2017 4:16 PM</div>
                                        <div className="font15 mine-font-black">You have awarded CYYong the job</div>
                                    </div>
                                    <div className="font15 text-bold mine-font-success mine-pointer" onClick={() => this.setState({ showModal1: true })}>View</div>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/document_mid.png" className="zIndex100 mine-back-white" />
                                    <div className="font15 text-bold mine-font-black ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">12 Jul, 2017 8:16 PM</div>
                                        <div className="font15 mine-font-black">New job request posted</div>
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


export default AppointmentOutgoingJob10;


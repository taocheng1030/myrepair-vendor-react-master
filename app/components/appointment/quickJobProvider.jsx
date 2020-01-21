import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import Pager from 'react-pager';
import ReactStars from 'react-stars'
import Carousel from 'nuka-carousel'

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')
import AppHeader from './header'

class AppointmentQuickJobProvider extends React.Component {

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
            ],
            decorators: null,
            images: [
                "img/mine/back1.png", "img/mine/back1.png", "img/mine/back1.png", "img/mine/back1.png", "img/mine/back1.png"
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
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">Pick Up:</span> 17 Jurong west 5, 328292
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="flex-left">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg"
                            ><div className="ml-lg mr-lg">Add Before & After Photo</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Geotracking</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Billable Item Into Invoice</div></Button>

                        </div>
                        <div className="flex-center-center">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg">
                                Job Completed? End Job</Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg ml-lg">
                                Save Changes</Button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal2} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">Pick Up:</span> 17 Jurong west 5, 328292
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="mt45">
                            <div className="font15 mine-font-black text-bold">Add Before & After Photo (optional)</div>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270 mt-lg mb-lg"
                            >Add Photos</Button>
                            <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                        </div>
                        <div className="flex-left">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg"
                            ><div className="mr-lg ml-lg">Add Geotracking</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Billable Item Into Invoice</div></Button>

                        </div>
                        <div className="flex-center-center">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg">
                                Job Completed? End Job</Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg ml-lg">
                                Save Changes</Button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal3} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Job Completed!</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">AliciaLeong has been notified and will verify the work done.</span>
                        </div>
                        <div>
                            <div>
                                <div className="mine-normal-button mine-back-info mt-lg mine-font-white mt45">
                                    OK
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal4} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">Pick Up:</span> 17 Jurong west 5, 328292
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="mt45">
                            <div className="font15 mine-font-black text-bold">Add Before & After Photo (optional)</div>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270 mt-lg mb-lg"
                            >Add Photos</Button>
                            <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                        </div>
                        <div className="flex-left">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg"
                            ><div className="mr-lg ml-lg">Add Geotracking</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Billable Item Into Invoice</div></Button>

                        </div>

                        <div className="mt45">
                            <div className="font15 mine-font-black text-bold">Add Billable Item</div>
                            <div className="flex-left-center">
                                <div className="font16 mine-font-black text-bold width170">Item Description</div>
                                <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, flex: 1 }} />
                            </div>
                            <div className="flex-left-center">
                                <div className="font16 mine-font-black text-bold width170">Price</div>
                                <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, flex: 1 }} />
                            </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270 mt-lg mb-lg"
                                >Add Photos</Button>
                            </div>
                            <div>
                                <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 mt-lg mb-lg">
                                    Send To Client For Approval</Button>
                            </div>
                        </div>

                        <div className="flex-center-center">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg">
                                Job Completed? End Job</Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg ml-lg">
                                Save Changes</Button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal5} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">Pick Up:</span> 17 Jurong west 5, 328292
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="mt45">
                            <div className="font15 mine-font-black text-bold">Add Before & After Photo (optional)</div>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270 mt-lg mb-lg"
                            >Add Photos</Button>
                            <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                        </div>

                        <div className="mt45">
                            <div className="text-bold font15 mine-font-black">Billable Item</div>
                            <div className="font13 mine-font-grey mt">Request sent: 8 Jul, 2017 2:45 PM</div>
                            <div className="font13 mine-font-danger mt">Awaiting approval...</div>
                            <div className="font15 mine-font-black mt">Wrapping paper</div>
                            <div className="font15 mine-font-black text-bold mt">$ 5</div>
                            <div className="flex-left mt-lg">
                                <div className="mine-image-170 mr-lg"></div>
                                <div className="mine-image-170 ml-lg"></div>
                            </div>
                            <div className="font13 mine-font-grey mt45">Request sent: 8 Jul, 2017 2:45 PM</div>
                            <div className="font13 mine-font-grey mt">Request Approved: 8 Jul, 2017 2:45 PM</div>
                            <div className="font15 mine-font-black mt">Ribbon</div>
                            <div className="font15 mine-font-black text-bold mt">$ 10</div>
                        </div>

                        <div className="flex-left">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg"
                            ><div className="mr-lg ml-lg">Add Geotracking</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Billable Item Into Invoice</div></Button>

                        </div>
                        <div className="flex-center-center">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg">
                                Job Completed? End Job</Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg ml-lg">
                                Save Changes</Button>
                        </div>
                    </div>
                </Modal>
                <Modal show={this.state.showModal6} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Start Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">Pick Up:</span> 17 Jurong west 5, 328292
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add comments optional" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>
                        <div className="mt45">
                            <div className="font15 mine-font-black text-bold">Add Before & After Photo (optional)</div>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270 mt-lg mb-lg"
                            >Add Photos</Button>
                            <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/info_close.png" /></div>
                        </div>

                        <div className="mt45">
                            <div className="text-bold font15 mine-font-black">Billable Item</div>
                            <div className="font13 mine-font-grey mt">Request sent: 8 Jul, 2017 2:45 PM</div>
                            <div className="font13 mine-font-danger mt">Awaiting approval...</div>
                            <div className="font15 mine-font-black mt">Wrapping paper</div>
                            <div className="font15 mine-font-black text-bold mt">$ 5</div>
                            <div className="flex-left mt-lg">
                                <div className="mine-image-170 mr-lg"></div>
                                <div className="mine-image-170 ml-lg"></div>
                            </div>
                            <div className="font13 mine-font-grey mt45">Request sent: 8 Jul, 2017 2:45 PM</div>
                            <div className="font13 mine-font-grey mt">Request Approved: 8 Jul, 2017 2:45 PM</div>
                            <div className="font15 mine-font-black mt">Ribbon</div>
                            <div className="font15 mine-font-black text-bold mt">$ 10</div>
                        </div>

                        <div style={{width:'100%', height:1, backgroundColor:'lightgrey', marginTop:45, marginBottom:45}}/>

                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>End Job<span className="font14 mine-font-grey ml-lg">18 Jul, 2017 9:56 AM</span></div>
                        </div>

                        <div className="font15 mine-font-black mt-lg pt-lg">
                            <span className="text-bold mr">AliciaLeong</span> has requested a PIN code. Your recipient should give you the PIN code:
                        </div>
                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="PIN code" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>

                        <div className="mt45" style={{ width: '100%' }}>
                            <FormControl type="text" placeholder="Add Comments (optional)" className="form-control mine-input mine-border-info" style={{ height: 40, width: '100%' }} />
                        </div>

                        <div className="flex-left">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg"
                            ><div className="ml-lg mr-lg">Add Before & After Photo</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Geotracking</div></Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button mt45 mb-lg ml-lg"
                            ><div className="ml-lg mr-lg">Add Billable Item Into Invoice</div></Button>
                        </div>

                        <div className="flex-center-center">
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg">
                                Job Completed? End Job</Button>
                            <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width370 height70 mt45 mb-lg ml-lg">
                                Save Changes</Button>
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
                                    <p className="font18 mine-font-black text-bold">AliciaLeong</p>
                                </div>
                                <div className="mt45">
                                    <div>
                                        <div className="mine-normal-button mine-back-info mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal1: true })}>
                                            <Image src="img/mine/button_chat2.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="mine-normal-button mine-back-info mine-button-height-50 mt-lg width270 mb-lg"
                                            onClick={() => this.setState({ showModal2: true })}>
                                            <Image src="img/mine/button_proposal_white.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <Button bsClass="btn btn-oval btn-warning btn-outline mine-default-button width270 mt45 mb-lg"
                                            onClick={() => this.setState({ showModal6: true })}>Withdraw From Job</Button>
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col sm={9} smPull={3} className="mine-border-right">
                            <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                                <Image src="img/mine/runner_sm.png" className="mr-lg" />
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <span className="mine-normal-text mine-vertical-bottom">Running Man</span>
                                </div>
                            </div>
                            <div className="font36 mine-font-grey text-bold mt-lg">Lunch Delivery</div>
                            <div className="mine-font-grey font22">
                                Before 1:00 PM Today
                            </div>
                            <div className="mt45 pt-lg" style={{ position: 'relative' }}>
                                <div style={{ height: 90, position: 'absolute', top: 50, left: 22 }} className="mine-line-info zIndex0" />
                                <div className="flex-left-center">
                                    <Image src="img/mine/icon_startwork_inactive@2x.png" className="zIndex100 ml-sm mine-back-white" />
                                    <div className="font15 text-bold mine-font-black ml-lg" style={{ flex: 1 }}>You have received 1 new quotation</div>
                                    <Button bsClass="text-bold btn btn-oval btn-info mine-back-info mt" onClick={() => this.setState({ showModal3: true })}
                                        style={{ width: 150, height: 35 }}>Job report...</Button>
                                </div>
                                <div className="flex-left-center mt45">
                                    <Image src="img/mine/document_mid.png" className="zIndex100 mine-back-white" />
                                    <div className="font15 text-bold mine-font-black ml-lg" style={{ flex: 1 }}>
                                        <div className="font15 mine-font-grey">12 Jul, 2017 8:16 PM</div>
                                        <div className="font15 mine-font-black">You posted this ongoing job in jobs</div>
                                    </div>
                                    <div className="font15 text-bold mine-font-info mine-pointer" onClick={() => this.setState({ showModal2: true })}>View</div>
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


export default AppointmentQuickJobProvider;


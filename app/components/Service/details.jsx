import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const avatar_image = require('../../img/mine/avatar1.png')

class ServiceDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            endDate: null,
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false,
            showModal5: false,
            showModal6: false,
            data: [
                { name: 'CYYong', rating: 3.5, property: 'Very patient' },
                { name: 'CYYong', rating: 3.5, property: 'Good workmanship' },
                { name: 'CYYong', rating: 3.5, property: 'hightly recommended' },
                { name: 'CYYong', rating: 3.5, property: 'Very patient' },
                { name: 'CYYong', rating: 3.5, property: 'Good workmanship' },
                { name: 'CYYong', rating: 3.5, property: "hightly recommended" },
            ],
            decorators: null,
            total: 337,
            current: 1,
            visiblePage: 7,
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
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Buy Service</div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <div className="font15 mine-font-grey text-bold mt45">
                            <span className="mr30">Package</span>$ 150.0
                        </div>
                        <div style={{ width: '100%', height: 1, backgroundColor: 'lightgrey', marginTop: 30, marginBottom: 30 }} />
                        <div className="font15 mine-font-grey">
                            conguratulations on finding a good match!<br /><br /><br />
                            Next, let's set up a payment method. The payment will only be released when the service is completed.
                        </div>
                        <div className="mt45">
                            <Button bsClass="mine-success-button btn btn-oval btn-success height70 width470 font18"
                            >Pay buy credit card ending in 3792</Button>
                        </div>
                        <div className="mt-lg">
                            <Button bsClass="mine-success-button btn btn-oval btn-success width470 font18 height70"
                            >Pay buy Jacks credit - balance $ 150.0</Button>
                        </div>
                    </div>
                </Modal>

                <Modal show={this.state.showModal2} onHide={this.closeModal.bind(this)} >
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 40 }}>
                        <div className="font22 mine-text-grey">Payment Set Up Successfully</div>
                        <Button bsClass="mine-success-button btn btn-oval btn-success width170 font18 height40 mt45">OK</Button>
                    </div>
                </Modal>

                <Modal show={this.state.showModal3} onHide={this.closeModal.bind(this)} >
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 40 }}>
                        <div className="font22 mine-font-grey">Thank You!</div>
                        <div className="font14 mine-font-grey mt45">Our team will be looking into the matter</div>
                        <Button bsClass="mine-success-button btn btn-oval btn-success width170 font18 height40 mt45">Done</Button>
                    </div>
                </Modal>

                <Modal show={this.state.showModal4} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Report Service?</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">Make this post as inappropriate or offensive.</span>
                        </div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-button flex-center-center">Cancel</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-button mine-back-danger mine-font-white flex-center-center">Report</div>
                        </div>
                    </div>
                </Modal>

                <Modal show={this.state.showModal5} onHide={this.closeModal.bind(this)} className="no-border-radius modal-width-1100">
                    <div style={{ padding: 100 }}>
                        <div className="flex-left">
                            <div className="font22 mine-font-black" style={{ flex: 1 }}>Buy Service</div>
                            <Image src="img/mine/success_close.png" className="mine-pointer" onClick={() => this.closeModal()} />
                        </div>
                        <div className="mt-lg" style={{ display: 'inline-block' }}>
                            <ReactStars
                                count={5}
                                size={40}
                                half={true}
                                value={3.5}
                                edit={false}
                                color2={'#ffd700'} />
                        </div>
                        <div style={{ height: 1, width: '100%', backgroundColor: 'lightgrey' }} />
                        {this.state.data.map((item, index) =>
                            <div key={index} className="flex-left-center p-lg mine-border-bottom">
                                <Image src="img/user/02.jpg" className="circle-avatar-100" />
                                <div className="ml-lg">
                                    <div className="mine-font-grey font13 text-bold">
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
                                    <div className="mine-font-black font15 text-bold">
                                        {item.property}
                                    </div>
                                </div>

                            </div>
                        )}
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
            </div>
        )
    }
    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                {/* <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                /> */}

                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/service_detail.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                </div>
                <div className="container">
                    <Row>

                        <Col sm={3} smPush={9} className="pt-lg pl-lg">
                            <div className="text-center">
                                <Image src={avatar_image} className="img-circle thumb128" />
                                <div className="mt-lg">
                                    <p className="font18 mine-font-grey text-bold">Alan. Tam</p>
                                    <div style={{ display: 'inline-block' }}>
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            half={true}
                                            value={3.5}
                                            edit={false}
                                            color2={'#ffd700'} />
                                    </div>
                                    <div className="mine-font-warning font13 mt8">
                                        <span>2,328 people have booked this service!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-lg">
                                <Button bsClass="mine-success-button btn btn-oval btn-success width270 font18"
                                    onClick={() => this.setState({ showModal5: true })}>Request A Quatation</Button>
                            </div>
                            <div className="mt-lg">
                                <Button bsClass="btn btn-oval btn-success btn-outline mine-default-button width270">Save To Favorites</Button>
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
                                Service reference no.:S3892<br />
                                Posted on 12 May, 2017
                            </div>
                            <div className="font16 mine-font-success text-bold mt45 mine-pointer">Report Service</div>
                        </Col>

                        <Col sm={9} smPull={3} className="mine-border-right pb45">
                            <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                                <Image src="img/mine/brush.png" className="mr-lg" />
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <span className="mine-normal-text mine-vertical-bottom">Household Chores</span>
                                </div>
                            </div>
                            <div className="font36 mine-font-grey text-bold mt-lg">Gardening</div>
                            <div className="mine-font-grey font16 mt">
                                <em className="fa fa-map-marker mr"></em>
                                <span>West, Jurong West</span>
                            </div>
                            <div className="font22 text-bold mine-font-grey mt-lg">$50.00 - $100.00</div>
                            <div className="font15 mine-font-grey mr30 pr30 mt45">
                                We are experts at gardening & landscaping. Please state in your quotation: size of your garden, what tasks you need done, and any special requirements
                        </div>
                            <div className="flex-left mt-lg pt-lg">
                                <Button bsClass="btn btn-oval btn-success btn-outline small-button">gardening</Button>
                                <Button bsClass="btn btn-oval btn-success btn-outline ml small-button">landscaping</Button>
                                <Button bsClass="btn btn-oval btn-success btn-outline ml small-button">horticulture</Button>
                            </div>
                            <div style={{ height: 350 }} className="mt45">
                                <div className="font22 mine-font-black">Time Slots</div>
                            </div>
                            <div className="font22 mine-font-black">Reviews</div>
                            <div className="flex-left">
                                <ReactStars
                                    count={5}
                                    size={28}
                                    half={true}
                                    value={3.5}
                                    edit={false}
                                    color2={'#ffd700'} />
                                <div className="ml-lg relative">
                                    <span className="mine-jumbotron">(3,121)</span>
                                </div>
                                <div style={{ position: 'absolute', right: 60 }} >
                                    <Button bsClass="btn btn-oval btn-success btn-outline mine-default-button width270">View All Reviews</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className="mine-back-success-opacity flex-row" style={{ width: '100%' }}>
                    <div className="container flex-row mt45 mb45">
                        <div className="flex-left-center flex-grow-1">
                            <div>
                                <div className="font48 mine-font-success">Have a similar service?</div>
                                <div className="font30 mine-font-black">Start listing your services with us now!</div>
                            </div>
                        </div>
                        <div className="flex-right-center flex-grow-1">
                            <Button bsClass="btn btn-oval btn-success width270 height70 font18 text-bold">Post Service</Button>
                        </div>
                    </div>
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default ServiceDetail;


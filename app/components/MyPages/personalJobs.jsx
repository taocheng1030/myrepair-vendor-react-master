import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, InputGroup } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import AppHeader from './header'

import Api from '../../API/api'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class PersonalJobs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            bookings: [],
            logs: [],
            showLogId: -1,

            date: null,
            customerId: props.location.state.customerId,
            customerName: props.location.state.customerName
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        let { user } = Api.getCurrentUser();
        Api.getOrdersbyCustomer(user.id, this.state.customerId, (err, res) => {
            console.log(err, res)
            this.setState({ bookings: res.items })
        })
    }

    invoice() {
        var win = window.open('/invoice', 'invoice');
        win.focus();
    }

    addJob() {
        this.props.history.push('select-device')
    }


    updateStatus(item) {
        let { user } = Api.getCurrentUser()
        Api.updateOrderStatus({
            vendor_id: user.id,
            order_id: item.order.ID,
            customer_id: item.order.customer_id,
            status: item.order.status,
            price: item.order.price,
            jobs_comments: item.order.commnet,
            byemail: item.order.byemail == true ? 1 : 0,
            bysms: item.order.bysms == true ? 1 : 0,
        }, (err, res) => {
            console.log(err, res)
            this.forceUpdate()
        })
    }

    showJobLog(orderId) {
        if (orderId == this.state.showLogId) {
            this.setState({ showLogId: -1 })
            return;
        }
        Api.getJobLog(orderId, (err, res) => {
            console.log(res)
            this.setState({ logs: res.items, showLogId: orderId })
        })
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing',  'Customers', 'My Account', 'My Coin']} links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing',  'customers', 'myaccount', 'mycoin']} cur="Personal Job" />
                <div className="container ">
                    <div className="font24 text-bold mt45 mine-font-black">Jobs for customer: {this.state.customerName}</div>

                    {/* <div className="mine-normal-button mine-back-primary mine-font-white width170 font14 text-nowrap mt-lg" style={{ height: 42 }}
                        onClick={() => this.addJob()}><span className="fa fa-plus mr" />Add New Job</div> */}
                    <div className="mt45">
                        {this.state.bookings.map((item, index) => {
                            let { profile, order } = item
                            let date = new Date(order.book_date)
                            return (
                                <div key={index} className={
                                    order.status == 0 ? "panel panel-warning" :
                                        order.status == 1 ? "panel panel-danger" :
                                            "panel panel-primary"}>

                                    <div className="panel-heading">
                                        {/* <span className="fa fa-calendar mr" />27 Jul, 2017 <span className="fa fa-clock-o mr"> 2:45 AM</span> */}
                                        <span className="fa fa-calendar mr" />{date.getDate()} {months[date.getMonth()]}, {date.getFullYear()} <span className="fa fa-clock-o mr"> {date.getHours()}:00</span>
                                        <div className="pull-right">
                                            {order.status == 0 && <div className="mine-font-white font20 fa fa-spinner" > <span className="font16">Awaiting</span></div>}
                                            {order.status == 1 && <div className="mine-font-white font20 icon-close"  > <span className="font16"> Cancelled</span></div>}
                                            {order.status == 2 && <div className="mine-font-white font20 fa fa-check-square-o"  > <span className="font16"> Fixed</span></div>}
                                        </div>
                                    </div>
                                    <div className="panel-body">
                                        <Row>
                                            <Col sm={6}>
                                                <div className="p">
                                                    <div className="font24 mine-font-primary">{profile.firstname + ' ' + profile.surname}</div>
                                                    <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Address:</span>{profile.address + ' ' + profile.address2}</div>
                                                    <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Country:</span>{profile.country}</div>
                                                    <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Post Code:</span>{profile.post_code}</div>

                                                    <div className="font15 mine-font-grey mt-lg"><span className="text-bold mine-font-black mr-sm">Phone:</span>{profile.tex_phone}</div>
                                                    <div className="font15 mine-font-grey"><span className="text-bold mine-font-black mr-sm">Mobile:</span>{profile.phone_code + profile.mobile_phone}</div>
                                                    <div className="font15 mine-font-grey"><span className="text-bold mine-font-black mr-sm">Email:</span>{profile.email}</div>
                                                    <ul className="mt-lg font16">
                                                        <li><span className="text-bold">Job Reference</span> : {order.reference_key}</li>
                                                        <li><span className="text-bold">Device</span> : {order.devicename}</li>
                                                        {/* <li><span className="text-bold">Operating System</span>: Mavericks</li> */}
                                                        <li><span className="text-bold">Make</span> : {order.makename}</li>
                                                        <li><span className="text-bold">Model</span> : {order.modelname}</li>
                                                        <li><span className="text-bold">Method</span> : {order.type == 0 ? 'Drop In' : 'Collect'}</li>
                                                        <li><span className="text-bold">Price</span> : £{order.price.toFixed(2)}</li>
                                                    </ul>
                                                    {item.description && <div className="font15 mine-font-black text-bold">Comment:</div>}
                                                    <div className="font15 mine-font-grey">{item.description}</div>

                                                    <div className="panel panel-default mt45">
                                                        <div className="panel-heading">
                                                            Issues
                                                </div>
                                                        <div className="panel-body">
                                                            <ul>
                                                                <li><span className="text-bold"></span>{order.servicename}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col sm={6}>
                                                <div className="p">
                                                    <div className="flex-left-center mt">
                                                        <div className="font15 mine-font-warning text-bold mr-lg">Estimated</div>
                                                        <InputGroup style={{ width: 150 }}>
                                                            <InputGroup.Addon>£</InputGroup.Addon>
                                                            <FormControl type="text" defaultValue={order.price} onChange={(e) => order.price = Number(e.target.value)} />
                                                        </InputGroup>
                                                    </div>
                                                    <div className="mt-lg">
                                                        <div className="line-height-35">Status: </div>
                                                        <FormControl componentClass="select" name="account" className="form-control" defaultValue={order.status}
                                                            onChange={(e) => order.status = Number(e.target.value)} >
                                                            <option value={0}>Awaiting</option>
                                                            <option value={1}>Cancel</option>
                                                            <option value={2}>Fixed</option>
                                                            <option value={3}>Fixing</option>
                                                        </FormControl>
                                                    </div>
                                                    <div className="mt-lg">
                                                        <div className="line-height-35">Job Comments: </div>
                                                        <textarea rows="5" type="text" placeholder="write here..." className="form-control mine-border-warning"
                                                            onChange={(e) => order.comment = e.target.value} />
                                                    </div>
                                                    <div className="clearfix mine-primary-check">
                                                        <div className="mt45">Notify The Customer?</div>
                                                        <div className="checkbox c-checkbox" onChange={() => order.byemail = (order.byemail == true) ? false : true}>
                                                            <label className="mine-small-normal-text">
                                                                <input type="checkbox" value="" name="remember" />
                                                                <em className="fa fa-check mr"></em>
                                                                EMAIL
                                                        </label>
                                                        </div>
                                                        <div className="checkbox c-checkbox" onChange={() => order.bysms = (order.bysms == true) ? false : true}>
                                                            <label className="mine-small-normal-text">
                                                                <input type="checkbox" value="" name="remember" />
                                                                <em className="fa fa-check mr"></em>
                                                                SMS
                                                        </label>
                                                        </div>
                                                    </div>
                                                    <Row className="mt-lg">
                                                        <Col sm={6}>
                                                            <div className="mine-normal-button mine-back-primary mine-font-white font14 text-nowrap mt-lg" style={{ height: 42 }}
                                                                onClick={() => this.updateStatus(item)}>Update Status</div>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <div className="mine-normal-button mine-back-warning mine-font-white font14 text-nowrap mt-lg" style={{ height: 42 }}
                                                                onClick={() => this.invoice()}>Invoice</div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="mine-normal-button mine-back-grey mine-font-white font14 text-nowrap mt-lg" style={{ height: 42 }}
                                            onClick={() => this.showJobLog(item.ID)}>
                                            {this.state.showLogId != item.ID && <span className="fa fa-angle-down mr" />}
                                            {this.state.showLogId == item.ID && <span className="fa fa-angle-up mr" />}
                                            Job Log</div>
                                        {this.state.showLogId == item.ID && this.state.logs.map((log, index) => {
                                            return (
                                                <div key={index} className="p mine-border-bottom">
                                                    <Row>
                                                        <Col sm={6}>
                                                            <span className="font16 mine-font-grey">{log.createdAt}</span>
                                                        </Col>
                                                        <Col sm={6}>
                                                            <span className="font16 mine-font-grey">status: {log.status == 0 ? 'Awaiting' : (log.status == 1 ? 'Cancel' : (log.status == 2 ? 'Fixed' : 'Fixing'))}</span>
                                                        </Col>
                                                    </Row>
                                                    <div>
                                                        <div className="font16 mine-font-grey">Comment: {log.comment}</div>
                                                    </div>
                                                    <Row>
                                                        <Col sm={4}>
                                                            <span className="font16 mine-font-grey">Email: {log.byemail == 1 && <span className="fa fa-check" />}</span>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <span className="font16 mine-font-grey">SMS: {log.bysms == 1 && <span className="fa fa-check" />} </span>
                                                        </Col>
                                                        <Col sm={4}>
                                                            <span className="font16 mine-font-grey">Price: {log.price}</span>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }

}


export default PersonalJobs;

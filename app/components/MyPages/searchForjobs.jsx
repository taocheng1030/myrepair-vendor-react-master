import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, InputGroup } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import AppHeader from './header'

import Api from '../../API/api'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class SearchForJobs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            reference_key: '',
            post_code: '',
            customer_name: '',
            bookings: [],
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
        let { user } = Api.getCurrentUser();
    }

    searchOrder() {
        let { user } = Api.getCurrentUser()
        Api.searchOrder({
            vendor_id: user.id,
            reference_key: this.state.reference_key,
            customer_name: this.state.customer_name,
            post_code: this.state.post_code
        }, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({ bookings: res.items })
            }
        })
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'Buy/Sell', 'Add New Product', 'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing', 'customers', 'products', 'new-product', 'myaccount', 'mycoin']} cur="Search For Jobs" />
                <div className="container ">
                    <div className="mt45 panel panel-primary">
                        <div className="panel-heading">
                            <span className="fa fa-search mr" />Search For Jobs
                        </div>
                        <div className="panel-body">
                            <div className="p">
                                <div className="font15 mine-font-grey mt-lg">Job Reference</div>
                                <FormControl type="text" placeholder="Please Enter the Customer Job Reference" className="form-control width370 mt-sm"
                                    value={this.state.reference_key} onChange={(e) => this.setState({ reference_key: e.target.value })} />
                                <div className="font15 mine-font-grey mt-lg">Customer Name</div>
                                <FormControl type="text" placeholder="Please Enter the Customer Name" className="form-control width370 mt-sm"
                                    value={this.state.customer_name} onChange={(e) => this.setState({ customer_name: e.target.value })} />
                                <div className="font15 mine-font-grey mt-lg">Customer Postcode</div>
                                <FormControl type="text" placeholder="Please Enter the Customer Postcode" className="form-control width370 mt-sm"
                                    value={this.state.post_code} onChange={(e) => this.setState({ post_code: e.target.value })} />
                                <div className="mine-normal-button mine-back-warning mine-font-white width170 font14 text-nowrap mt45"
                                    style={{ height: 42 }} onClick={() => this.searchOrder()}>
                                    Submit</div>
                            </div>

                        </div>
                    </div>

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
                                    <span className="fa fa-calendar mr" /><span>Job Reference : {order.reference_key}</span>
                                    <div className="pull-right">
                                        <span className="fa fa-calendar mr" />{date.getDate()} {months[date.getMonth()]}, {date.getFullYear()} <span className="fa fa-clock-o mr"> {date.getHours()}:00</span>
                                        {/* {order.status == 0 && <div className="mine-font-white font20 fa fa-spinner" > <span className="font16">Awaiting</span></div>}
                                        {order.status == 1 && <div className="mine-font-white font20 icon-close"  > <span className="font16"> Cancelled</span></div>}
                                        {order.status == 2 && <div className="mine-font-white font20 fa fa-check-square-o"  > <span className="font16"> Fixed</span></div>} */}
                                    </div>
                                </div>
                                <div className="panel-body">
                                    <Row>
                                        <Col sm={4}>
                                            <div className="p">
                                                <div className="font15 mine-font-grey">{profile.firstname + ' ' + profile.surname}</div>
                                                <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Address:</span>{profile.address + ' ' + profile.address2}</div>
                                                <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Country:</span>{profile.country}</div>
                                                <div className="font15 mine-font-grey"><span className="text-bold mr-sm">Post Code:</span>{profile.post_code}</div>
                                            </div>
                                        </Col>

                                        <Col sm={4}>
                                            <div className="p">
                                                <ul className="font16">
                                                    <li><span className="text-bold">Device</span> : {order.devicename}</li>
                                                    {/* <li><span className="text-bold">Operating System</span>: Mavericks</li> */}
                                                    <li><span className="text-bold">Make</span> : {order.makename}</li>
                                                    <li><span className="text-bold">Model</span> : {order.modelname}</li>
                                                    <li><span className="text-bold">Method</span> : {order.type == 0 ? 'Drop In' : 'Collect'}</li>
                                                </ul>
                                                <div>Issues</div>
                                                <div>
                                                    <ul>
                                                        <li><span className="text-bold"></span>{order.servicename}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="p">
                                                <div className="font15 mine-font-grey"><span className="text-bold mine-font-black mr-sm">Phone:</span>{profile.tex_phone}</div>
                                                <div className="font15 mine-font-grey"><span className="text-bold mine-font-black mr-sm">Mobile:</span>{profile.phone_code + profile.mobile_phone}</div>
                                                <a href={"mailto:" + profile.email} className="font15 mine-font-grey mine-pointer"><span className="text-bold mine-font-black mr-sm">Email:</span>{profile.email}</a>
                                            </div>
                                        </Col>
                                    </Row>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

}


export default SearchForJobs;

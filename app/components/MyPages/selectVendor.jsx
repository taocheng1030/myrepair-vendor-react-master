import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class SelectVendor extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            devices: [
                { icon: 'img/Laptop-green.png', title: 'Laptop PC', value: true },
                { icon: 'img/Mac-green.png', title: 'Macbook', value: false },
                { icon: 'img/PC-green.png', title: 'Desktop PC', value: true },
                { icon: 'img/Tablet-green.png', title: 'Tablet', value: true },

                { icon: 'img/SmartPhone-green.png', title: 'Smartphone', value: true },
                { icon: 'img/Mac-green.png', title: 'iMac', value: false },
                { icon: 'img/SmartPhone-green.png', title: 'iPhone', value: true },
                { icon: 'img/Tablet-green.png', title: 'iPad', value: true },
            ],
            vendorType: [
                { title: 'Open', value: true },
                { title: 'Parking', value: false },
                { title: 'Drop In', value: true },
                { title: 'Collection', value: true },
            ],
            vendors: [
                {
                    image: "img/vendor/1.jpg",
                    closed: true,
                    type: 0,
                    title: 'We Support It', rating: 5,
                    description: 'We Support IT has been dedicated in giving the fastest support. Our technicians have years of experience and will be able to help you in a fast time. (THIS IS A TEST STORE PLEASE DO NOT USE)',
                    devices: ['Desktop Pc', 'iMac', 'iPhone', 'Smartphone', 'Tablet', 'Laptop PC'],
                    support: ['Drop In', 'Collection'],
                    distance: 1,
                },
                {
                    image: "img/vendor/2.png",
                    title: 'Pc Rescue Squad', rating: 4.7,
                    type: 1,
                    description: 'We Support IT has been dedicated in giving the fastest support. Our technicians have years of experience and will be able to help you in a fast time. (THIS IS A TEST STORE PLEASE DO NOT USE)',
                    devices: ['Desktop Pc', 'iMac', 'iPhone', 'Smartphone', 'Tablet', 'Laptop PC'],
                    support: ['Drop In', 'Collection'],
                    distance: 1,
                },

                {
                    image: "img/vendor/3.png",
                    closed: true,
                    type: 0,
                    title: 'Metacube Ltd Surbiton', rating: 4.2, description: 'We Support IT has been dedicated in giving the fastest support. Our technicians have years of experience and will be able to help you in a fast time. (THIS IS A TEST STORE PLEASE DO NOT USE)',
                    description: 'We Support IT has been dedicated in giving the fastest support. Our technicians have years of experience and will be able to help you in a fast time. (THIS IS A TEST STORE PLEASE DO NOT USE)',
                    devices: ['Desktop Pc', 'iMac', 'iPhone', 'Smartphone', 'Tablet', 'Laptop PC'],
                    support: ['Drop In', 'Collection'],
                    distance: 2,
                },
                {
                    image: "img/vendor/4.jpg",
                    type: 1,
                    title: 'Wii Fix Computer', rating: 3.8,
                    devices: ['Desktop Pc', 'iMac', 'iPhone', 'Smartphone', 'Tablet', 'Laptop PC'],
                    distance: 2,
                },
                {
                    image: "img/vendor/5.png",
                    type: 1,
                    devices: ['Desktop Pc', 'iMac', 'iPhone', 'Smartphone', 'Tablet', 'Laptop PC'],
                    title: 'IRepair Zone', rating: 3.4,
                    distance: 5,
                    closed: true,
                },

            ]
        }

        this.handlePageChanged = this.handlePageChanged.bind(this);

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {

    }

    selectDevice(index){
        this.props.history.push('select-device')
    }

    renderItem(item, index) {
        return (
            <div className="p">
                <Row>
                <div style={{height:30}}/>
                    <Col md={3}>
                        <div style={{height:10}}/>
                        <div style={{ position: 'relative', width: '100%', height: 150, borderRadius: 4, borderWidth: 1, borderStyle: 'solid', borderColor: '#eee' }}
                            className="flex-center-center mt-lg mine-pointer shadow-hover-box" onClick={()=>this.selectDevice(index)}>
                            <Image src={item.image} style={{ height: '80%', width: '80%', objectFit: 'contain' }} />
                            {item.closed && <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(50,70,100,0.6)' }}
                                className="font18 text-bold mine-font-white flex-center-center">CLOSED
                            </div>}
                            {item.type == 1 && <div className="ribbon blue"><span>Shop</span></div>}
                            {item.type == 0 && <div className="ribbon red"><span>Workshop</span></div>}
                        </div>
                        <div className="flex-center-center mt" style={{ flexDirection: 'column' }}>

                            <div className="font16 mine-font-primary text-center">{item.title}</div>
                            <div className="mt flex-left-center">
                                <ReactStars
                                    count={5}
                                    size={18}
                                    half={true}
                                    value={item.rating}
                                    edit={false}
                                    color2={'#ffd700'} />
                                <div className="font13 font-mine-black text-bold ml">{item.rating}</div>
                            </div>
                            <div className="mine-normal-button mine-back-primary mine-font-white flex-center-center width170 ml-sm font13 p text-nowrap mt"
                             onClick={()=>this.selectDevice(index)}>Select Shop</div>
                            <div className="mine-font-warning font15 mt-lg text-bold icon-target"> Distance: {item.distance} mile</div>
                        </div>
                        <div style={{ height: 20 }} />
                    </Col>
                    <Col md={8} mdOffset={1} >
                        {item.description!= undefined&&<div className="mt-lg font22 mine-font-grey text-bold">
                            Description
                        </div>}
                        {item.description!= undefined&&<div className="font15 mine-font-grey mt-lg">
                            {item.description}
                        </div>}
                        <div className="mt45 font22 mine-font-grey text-bold mb-lg">
                            Repair Services
                        </div>
                        {item.devices != undefined && item.devices.map((device, idx) => {
                            return (
                                <div key={idx} className="mine-tag-primary width170 m text-bold">
                                    {device}
                                </div>
                            )
                        })}
                        {item.support != undefined && item.support.map((sup, idx) => {
                            return (
                                <div key={idx} className="mine-tag-warning width170 m text-bold">
                                    {sup}
                                </div>
                            )
                        })}
                        <div style={{ height: 20 }} />
                    </Col>
                </Row>
            </div>

        )
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }
    render() {
        return (
            <div className="mine-back-white mine-border-bottom" style={{minHeight:740}}>
                <div style={{ position: 'relative' }}>
                    <Image src="img/bg11.jpg" style={{ height: 300, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '40%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="flex-left mt45 width670" style={{ position: 'relative' }}>
                                <FormControl type="text" placeholder="Please enter your City and Postcode" className="form-control mine-primary-big-input" />
                                <div className="primary-big-sign font15" style={{ right: 5 }}
                                    onClick={() => this.searchVendor()}>
                                    Search
                                </div>
                                <div className="mine-item-sign mine-font-primary mine-item-40" style={{ left: 10 }}>
                                    <span className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <Row>

                        <Col sm={3} smPush={9} className="pl0 pt">
                        
                            
                            <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left text-bold">
                                    Choose Vendor Type
                                </div>
                                <div className="clearfix mb-lg mine-primary-check">
                                    {this.state.vendorType.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox mt">
                                                <label className="mine-small-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value} />
                                                    <em className="fa fa-check mr"></em>
                                                    {item.title}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left text-bold">
                                    Choose Device
                                </div>
                                <div className="clearfix mb-lg mine-primary-check">
                                    {this.state.devices.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox text-nowrap">
                                                <label className="mine-small-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value} />
                                                    <em className="fa fa-check"></em>
                                                    <Image src={item.icon} className="thumb32 ml mr" />
                                                    {item.title}
                                                </label>
                                            </div>
                                        )
                                    })}


                                </div>
                            </div>
                        </Col>

                        <Col sm={9} smPull={3} className="mine-border-right">
                            <div className="mt45 mb-lg pb-lg">
                                <span className="mine-sub-title line-height-35">1,334 Vendors</span>
                                <div className="pull-right">
                                    <span className="line-height-35">Sort by: </span>
                                    <FormControl componentClass="select" name="account" className="form-control m-b pull-right mine-filter-option" >
                                        <option>Distance</option>
                                        <option>Rating</option>
                                        <option>Favorite</option>
                                    </FormControl>
                                </div>
                            </div>
                            <div>
                                <table className="table mb-mails">
                                    <tbody>
                                        {this.state.vendors.map((item, index) => {
                                            return (
                                                <tr key={index} className="mine-border-bottom">
                                                    {this.renderItem(item, index)}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <Pager
                                    total={this.state.total}
                                    current={this.state.current}
                                    visiblePages={this.state.visiblePage}
                                    titles={{ first: 'First', last: this.state.total }}
                                    className="pagination-sm pull-left mine-pointer"
                                    onPageChanged={this.handlePageChanged}
                                />
                            </div>
                            
                        </Col>
                        
                    </Row>
                </div>

            </div>
        );
    }

}


export default SelectVendor;


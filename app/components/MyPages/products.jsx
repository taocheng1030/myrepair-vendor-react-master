import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Form } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';


import Api from '../../API/api'
import config from '../../config'
import AppHeader from './header'
import NewProduct from './newProduct'
const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

class Products extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            devices: [],
            products: [],
            Filtering: [
                { title: 'Live', value: false },
                { title: 'Sold Out', value: false },
                { title: 'New', value: false },
            ],
            vendors: [],
            showDevice: false,
            showType: true,
            tab_status: 0
        }

        this.handlePageChanged = this.handlePageChanged.bind(this);

    }

    init(){
        let { user } = Api.getCurrentUser()
        Api.getProducts({ vendor_id: user.id }, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({ products: res.items })
            }
        })
    }

    componentDidMount() {
        window.scrollTo(0, 0)

        this.init()
    }

    componentWillUnmount() {

    }

    selectDevice(index) {
        let vendor = this.state.vendors[index]
        this.props.history.push('select-device', {
            vendorId: vendor.id,
            vendorName: vendor.company,
            devices: vendor.DeviceList,
            isBuy: this.props.location.state.isBuy
        })
    }

    sold(item) {
        let { user } = Api.getCurrentUser()
        Api.updateProduct({ action: 'sold', vendor_id: user.id, id: item.id }, (err, res) => {
            if ( err == null ){
                this.init()
                swal("Success!",'Sold out successfully', "success")
            }
        })
    }

    accept(item){
        let { user } = Api.getCurrentUser()
        Api.updateProduct({ action: 'accept', vendor_id: user.id, id: item.id }, (err, res) => {
            console.log(err,res)
            if ( err == null){
                this.init()
                swal("Success!",'Accepted successfully', "success")
            }
        })
    }

    reject(item){
        let { user } = Api.getCurrentUser()
        Api.updateProduct({ action: 'deleted', vendor_id: user.id, id: item.id }, (err, res) => {
            console.log(err,res)
            if ( err == null ){
                this.init()
                swal("Success!",'Rejected successfully', "success")
            }

        })
    }

    renderItem(item, index) {
        let {Filtering} = this.state
        if ( !(Filtering[0].value == Filtering[1].value && Filtering[1].value == Filtering[2].value) &&
            (Filtering[0].value == false && item.status == 0 || Filtering[1].value==false&& item.status==3||
            Filtering[2].value == false && item.status == 1) ) return null
        return (
            <div className="p">
                <Row>
                    <div style={{ height: 30 }} />
                    <Col md={3}>
                        <div style={{ height: 10 }} />
                        <div style={{ position: 'relative', width: '100%', height: 150, borderRadius: 4, borderWidth: 1, borderStyle: 'solid', borderColor: '#eee' }}
                            className="flex-center-center mt-lg mine-pointer shadow-hover-box" onClick={() => { }}>
                            <Image src={config.BACKEND_FILE_URL + item.image1} style={{ height: '80%', width: '80%', objectFit: 'contain' }} />
                            {item.status == 3 && <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(50,70,100,0.6)' }}
                                className="font18 text-bold mine-font-white flex-center-center">SOLD OUT
                            </div>}
                            {item.byvendor==5&&item.status == 5 && <div className="ribbon red"><span>New</span></div>}
                            {/* {item.type != 1 && <div className="ribbon red"><span>Workshop</span></div>} */}
                        </div>
                        <div className="flex-center-center mt" style={{ flexDirection: 'column' }}>

                            {/* <div className="font16 mine-font-primary text-center">$ {item.price}</div> */}
                            {/* <div className="mt flex-left-center">
                                <ReactStars
                                    count={5}
                                    size={18}
                                    half={true}
                                    value={item.rate}
                                    edit={false}
                                    color2={'#ffd700'} />
                                <div className="font13 font-mine-black text-bold ml">{item.rate}</div>
                            </div>
                            <div className="mine-normal-button mine-back-primary mine-font-white flex-center-center width170 ml-sm font13 p text-nowrap mt"
                                onClick={() => this.selectDevice(index)}>Select Shop</div> */}
                            <div className="mine-font-warning font15 mt-lg text-bold"> {item.devicename}/{item.custom_make}/{item.custom_model}</div>
                        </div>
                        <div style={{ height: 20 }} />
                    </Col>
                    <Col md={8} mdOffset={1} >
                        {item.description != undefined && <div className="mt-lg font22 mine-font-grey text-bold">
                            Description
                        </div>}
                        {item.description != undefined && <div className="font15 mine-font-grey mt-lg">
                            {item.description}
                        </div>}
                        <div className="mt45 font22 mine-font-grey text-bold mb-lg">
                            $ {item.price}
                        </div>
                        {item.status == 1 && <div className="flex-left mt-lg" style={{ flexDirection: 'column' }}>
                            <Button bsClass="mine-facebook-button btn btn-oval btn-primary width170" style={{ height: 40 }} onClick={() => this.sold(item)}>Sold</Button>
                        </div>}
                        {item.byvendor==5 && item.status == 5 && <div className="flex-left mt-lg">
                            <Button bsClass="btn btn-oval btn-primary width170" style={{ height: 40 }} onClick={() => this.accept(item)}>Accept</Button>
                            <Button bsClass="btn btn-oval btn-danger width170 ml" style={{ height: 40 }} onClick={() => this.reject(item)}>Reject</Button>
                        </div>}

                        <div style={{ height: 20 }} />
                    </Col>
                </Row>
            </div>

        )
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }

    onSearch(e) {
        e.preventDefault();
        e.stopPropagation();

    }

    changeDevice(index) {
        if (this.state.devices[index].value) {
            this.state.devices[index].value = false;
        } else {
            this.state.devices[index].value = true;
        }
    }


    changeType(index) {
        if (this.state.Filtering[index].value) {
            this.state.Filtering[index].value = false;
        } else {
            this.state.Filtering[index].value = true;
        }
        this.setState({Filtering:[...this.state.Filtering]})
    }

    changeTab(val){
      this.init()
      this.setState({tab_status:val})
    }

    addedNew(val){
      this.setState({tab_status:0})
    }
    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'Buy/Sell',  'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing', 'customers', 'products',  'myaccount', 'mycoin']} cur="Buy/Sell" />

                <div className="container">
                    <div style={{paddingTop:15}}>
                    {this.state.tab_status == 0 && <Button bsClass="btn btn-pill-left btn-primary width170"><span className="fa fa-check mr" />Products</Button>}
                    {this.state.tab_status != 0 && <Button bsClass="btn btn-pill-left btn-default width170"
                        onClick={() => this.changeTab(0)}>Products</Button>}
                    {this.state.tab_status == 1 && <Button bsClass="btn btn-pill-right btn-warning width170"><span className="fa fa-check mr" />Add New</Button>}
                    {this.state.tab_status != 1 && <Button bsClass="btn btn-pill-right btn-default width170"
                        onClick={() => this.changeTab(1)}>Add New</Button>}
                    </div>
                    {this.state.tab_status == 0 &&
                    <Row>

                        <Col sm={3} smPush={9} className="pl0 pt">
                            <div className="ml60" style={{ marginTop: 70 }}>
                                <div className="font14 mine-font-grey flex-left text-bold mine-pointer" onClick={() => this.setState({ showType: !this.state.showType })}>
                                Filtering
                                    <div className="ml-lg" style={{ marginTop: -2 }}>
                                        {!this.state.showType && <em className="fa fa-sort-down" />}
                                        {this.state.showType && <em className="mt fa fa-sort-up" />}

                                    </div>
                                </div>
                                {this.state.showType && <div className="clearfix mb-lg mine-primary-check">
                                    {this.state.Filtering.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox mt">
                                                <label className="mine-small-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value}
                                                        onChange={() => this.changeType(index)} />
                                                    <em className="fa fa-check mr"></em>
                                                    {item.title}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>}
                            </div>
                            {/* <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left text-bold mine-pointer" onClick={() => this.setState({ showDevice: !this.state.showDevice })}>
                                    Choose Device
                                    <div className="ml-lg" style={{ marginTop: -2 }}>
                                        {!this.state.showDevice && <em className="fa fa-sort-down" />}
                                        {this.state.showDevice && <em className="mt fa fa-sort-up" />}

                                    </div>
                                </div>
                                {this.state.showDevice && <div className="clearfix mb-lg mine-primary-check">
                                    {this.state.devices.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox text-nowrap">
                                                <label className="mine-small-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value}
                                                        onChange={() => this.changeDevice(index)} />
                                                    <em className="fa fa-check"></em>
                                                    <Image src={config.BACKEND_FILE_URL + item.image} className="thumb32 ml mr" />
                                                    {item.device_name}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>}
                            </div> */}
                        </Col>

                        <Col sm={9} smPull={3} className="mine-border-right">
                            <div>
                                <table className="table mb-mails">
                                    <tbody>
                                        {this.state.products.map((item, index) => {
                                            return (
                                                <tr key={index} className="mine-border-bottom">
                                                    {this.renderItem(item, index)}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                {/* <Pager
                                    total={this.state.total}
                                    current={this.state.current}
                                    visiblePages={this.state.visiblePage}
                                    titles={{ first: 'First', last: this.state.total }}
                                    className="pagination-sm pull-left mine-pointer"
                                    onPageChanged={this.handlePageChanged}
                                /> */}
                            </div>

                        </Col>

                    </Row>}
                    {this.state.tab_status == 1 && <NewProduct submit={()=>this.addedNew()}/>}
                </div>

            </div>
        );
    }

}


export default Products;

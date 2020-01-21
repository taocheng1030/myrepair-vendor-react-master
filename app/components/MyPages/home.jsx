import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Carousel, CarouselItem } from 'react-bootstrap';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')

class Home extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    searchVendor(){
        this.props.history.push("select-vendor");
    }

    render() {
        return (
            <div className="mine-back-white" style={{minHeight:740}}>

                <div className="shadow-box" style={{ position: 'relative', height: 600 }}>
                    {/* <Image src="img/mine/home.png" style={{ height: 800, width: '100%', objectFit: 'none' }} /> */}
                    <Carousel style={{ height: 600 }} nextIcon={null} prevIcon={null}>
                        <CarouselItem>
                            <Image alt="1920x600" src="img/bg11.jpg" style={{ width: '100%', height: 600, objectFit: 'none' }} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image alt="1920x600" src="img/bg12.png" style={{ width: '100%', height: 600, objectFit: 'none' }} />
                        </CarouselItem>
                        <CarouselItem>
                            <Image alt="1920x600" src="img/bg13.jpg" style={{ width: '100%', height: 600, objectFit: 'none' }} />
                        </CarouselItem>
                    </Carousel>
                    <div style={{ position: 'absolute', top: '35%', left: 0, width: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title mine-font-primary">MyDeviceRepair.co.uk</div>
                            <div className="mine-back-content mt">Millions of people have repaired<br />their devices on MyDeviceRepair.co.uk</div>
                            {/* <Image src="img/largelogo1.png"/> */}
                            <div className="flex-left mt45 width670" style={{ position: 'relative' }}>
                                <FormControl type="text" placeholder="Please enter your City and Postcode" className="form-control mine-primary-big-input" />
                                <div className="primary-big-sign font15" style={{ right: 5 }} 
                                    onClick={()=>this.searchVendor()}>
                                    Search
                                </div>
                                <div className="mine-item-sign mine-font-primary mine-item-40" style={{ left: 10 }}>
                                    <span className="fa fa-search" />
                                </div>
                            </div>
                            <div className="mine-back-content font18 mt-lg">Please Enter Your Location.
                                <span className="mine-font-warning text-bold mine-pointer"> Join us today</span></div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="font48 mine-font-warning text-bold mt45 text-center">Supported Devices</div>
                    </div>
                    <Row className="mt45">
                        <Col md={4}>
                            <div className="panel b shadow-box mine-pointer mine-back-primary-opacity" style={{borderRadius:0}}>
                                <div className="panel-body text-center p0 pb mine-back-white hover-opacity-remove">
                                    <a className="link-unstyled text-primary">
                                        {/* <em className="fa fa-5x fa-television mb-lg"></em> */}
                                        <Image src="img/PC-green.png" style={{height:200, width:200}} />
                                        <br />
                                        <span className="h4">PCs</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="panel b shadow-box mine-pointer mine-back-primary-opacity" style={{borderRadius:0}}>
                                <div className="panel-body text-center p0 pb mine-back-white hover-opacity-remove">
                                    <a className="link-unstyled text-info">
                                        {/* <em className="fa fa-5x fa-object-group mb-lg"></em> */}
                                        <Image src="img/Mac-green.png" style={{height:200, width:200}} />
                                        <br />
                                        <span className="h4">Macs</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="panel b shadow-box mine-pointer mine-back-primary-opacity" style={{borderRadius:0}}>
                                <div className="panel-body text-center p0 pb mine-back-white hover-opacity-remove">
                                    <a className="link-unstyled text-purple">
                                        {/* <em className="fa fa-5x fa-cubes mb-lg"></em> */}
                                        <Image src="img/Laptop-green.png" style={{height:200, width:200}} />
                                        <br />
                                        <span className="h4">Laptops</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={4}>
                            <div className="panel b shadow-box mine-pointer mine-back-primary-opacity" style={{borderRadius:0}}>
                                <div className="panel-body text-center p0 pb mine-back-white hover-opacity-remove">
                                    <a className="link-unstyled text-dark">
                                        {/* <em className="fa fa-5x fa-recycle mb-lg"></em> */}
                                        <Image src="img/Tablet-green.png" style={{height:200, width:200}} />
                                        <br />
                                        <span className="h4">Tablets</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="panel b shadow-box mine-pointer mine-back-primary-opacity" style={{borderRadius:0}}>
                                <div className="panel-body text-center  p0 pb mine-back-white hover-opacity-remove">
                                    <a className="link-unstyled text-dark">
                                        {/* <em className="fa fa-5x fa-street-view mb-lg"></em> */}
                                        <Image src="img/SmartPhone-green.png" style={{height:200, width:200}} />
                                        <br />
                                        <span className="h4">Smart Phones</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ width: '100%', height: 1, backgroundColor: 'lightgray', marginTop: 45 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="font48 mine-font-warning text-bold mt45 mb45 text-center">Repair Your Device Locally</div>
                    </div>

                    <Row className="mb45">
                        <Col md={4}>
                            <div className="flex-center-center p m" style={{ flexDirection: 'column' }}>
                                <Image src="img/search.jpg" />
                                <div className="font24 mine-font-grey text-bold mt-lg">Search</div>
                                <div className="font16 mine-font-grey text-center mt-lg">Type your loation in the search box above to find local repair shops in your area</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="flex-center-center p m" style={{ flexDirection: 'column' }}>
                                <Image src="img/book.jpg" />
                                <div className="font24 mine-font-grey text-bold mt-lg">Book</div>
                                <div className="font16 mine-font-grey text-center mt-lg">Choose the device you need repairing and what the problem is to get an estimated cost of repair. Then if your happy book it in for a collection or drop it in to store</div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="flex-center-center p m" style={{ flexDirection: 'column' }}>
                                <Image src="img/repaired.jpg" />
                                <div className="font24 mine-font-grey text-bold mt-lg">Repaired</div>
                                <div className="font16 mine-font-grey text-center mt-lg">Once the store has received your device they will keep you up to date with the repair process via sms and email. It's that simple</div>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
                {/* <div className="mt45" style={{ backgroundColor: '#e4e4e4' }}>
                    <div className="container">
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div className="font48 mine-font-warning text-bold mt45 text-center">Select Your Plan</div>
                            <Link to="home" className="font18 mine-pointer text-center">Do you repair devices and want to list your business?</Link>
                        </div>
                        <Row className="mt45 mb45">
                            <Col md={4}>
                                <div className="m">
                                    <div className="plan shadow-hover-box">
                                        <h3 className="plan-header">Trial</h3>
                                        <div className="plan-price">
                                            <div className="text-lg"><sup><small>$</small></sup>0
                                            </div>
                                        </div>
                                        <ul className="plan-features">
                                            <li>
                                                <em className="fa fa-check"></em>Unlimited Styles</li>
                                            <li>
                                                <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                            <li>
                                                <em className="fa fa-check"></em>Customer support</li>
                                            <li>
                                                <em className="fa fa-check"></em>Free Updates</li>
                                            <li>
                                                <em className="fa fa-check"></em>Limited to one client</li>
                                            <li>
                                                <em className="fa fa-times plan-feature-disable"></em>Multiple installation</li>
                                            <li>
                                                <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                                        </ul>
                                        <hr />
                                        <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="m">
                                    <div className="plan shadow-hover-box">
                                        <h3 className="plan-header">Monthly</h3>
                                        <div className="plan-price">
                                            <div className="text-lg"><sup><small>$</small></sup>60
                                            </div>
                                        </div>
                                        <ul className="plan-features">
                                            <li>
                                                <em className="fa fa-check"></em>Unlimited Styles</li>
                                            <li>
                                                <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                            <li>
                                                <em className="fa fa-check"></em>Customer support</li>
                                            <li>
                                                <em className="fa fa-check"></em>Free Updates</li>
                                            <li>
                                                <em className="fa fa-check"></em>Unlimited clients</li>
                                            <li>
                                                <em className="fa fa-check"></em>Multiple installation</li>
                                            <li>
                                                <em className="fa fa-times plan-feature-disable"></em>Not ready for resale</li>
                                        </ul>
                                        <hr />
                                        <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="m">
                                    <div className="plan shadow-hover-box">
                                        <h3 className="plan-header">Yearly</h3>
                                        <div className="plan-price">
                                            <div className="text-lg"><sup><small>$</small></sup>900
                                            </div>
                                        </div>
                                        <ul className="plan-features">
                                            <li>
                                                <em className="fa fa-check"></em>Unlimited Styles</li>
                                            <li>
                                                <em className="fa fa-check"></em>RTL &amp; Translation</li>
                                            <li>
                                                <em className="fa fa-check"></em>Customer support</li>
                                            <li>
                                                <em className="fa fa-check"></em>Free Updates</li>
                                            <li>
                                                <em className="fa fa-check"></em>Unlimited clients</li>
                                            <li>
                                                <em className="fa fa-check"></em>Multiple installation</li>
                                            <li>
                                                <em className="fa fa-check"></em>Ready for resale</li>
                                        </ul>
                                        <hr />
                                        <div className="text-center"><a href="" className="btn btn-info">Choose</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div> */}
                <div style={{background:'url("img/bg11.jpg")', padding:45}}>

                    <div className="flex-center-center">
                        <div className="mine-normal-button mine-back-warning mine-font-white flex-center-center width200 mr-sm font13 p text-nowrap">SIGN UP FOR FREE</div>
                        <div className="mine-normal-button mine-back-primary mine-font-white flex-center-center width200 ml-sm font13 p text-nowrap">Read FAQs</div>
                    </div>
                    <div className="mt-lg flex-center-center">
                        <div className="font16 text-center p m" style={{color:'#bbb'}}>
                            <span className="mine-font-warning">Sign up</span> now and search for approved stores in your local area to book your <span className="text-bold" style={{color:'#ddd'}}>PC, Mac, Laptop, Mac, Book, Tablet, iPad, Smart Phone</span> and <span className="text-bold" style={{color:'#ddd'}}>iPhones</span> for repair.
                        </div>
                    </div>
                </div>
            </div >
        );
    }

}


export default Home;


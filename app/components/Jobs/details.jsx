import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';
import ReactStars from 'react-stars'
import Carousel from 'nuka-carousel'

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
const avatar_image = require('../../img/mine/avatar1.png')

var decorators = [{
    component: React.createClass({
        render() {
            return (
                <button
                    onClick={this.props.previousSlide}>
                    Previous Slide
          </button>
            )
        }
    }),
    position: 'CenterLeft',
    style: {
        padding: 20
    }
},
{
    component: React.createClass({
        render() {
            return (
                <button
                    onClick={this.props.nextSlide}>
                    Next Slide
          </button>
            )
        }
    }),
    position: 'CenterRight',
    style: {
        padding: 20
    }
}
];

class JobsDetail extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            startDate: null,
            endDate: null,
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

    render() {
        return (
            <div className="mine-back-white mt76">
                <div>
                    <Carousel vertical={true} decorators={[]}>
                        {this.state.images.map((item, index) => {
                            return (
                                <img key={index} src={item} style={{ height: 800 }} />
                            )
                        })}
                    </Carousel>
                </div>
                <div className="container mt45">
                    <Row>

                        <Col sm={3} smPush={9} className="pt-lg pl-lg mine-border-left ">
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
                                        <span>Be one of the firt to bid on this job!</span>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-lg">
                                <div className="mt-lg pt-lg">
                                    <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270">Edit Service</Button>
                                </div>
                                <div className="mt-lg pt-lg">
                                    <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button width270">Delete Service</Button>
                                </div>
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

                                <div className="font20 mine-font-grey mt45">
                                    Job reference no.:S3892<br />
                                    Posted on 12 May, 2017
                                    </div>
                                <div className="mt45 mb45">
                                    <div className="font15 text-bold mine-font-grey">10 responses</div>
                                    <div className="font15 mine-font-grey">latest response: 10min ago</div>
                                    <div className="font15 mine-font-grey">Average Quote:<span className="text-bold mine-font-black">$100.00</span></div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9} smPull={3} className="pb45">
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image src="img/mine/messenger.png" className="mr-lg" style={{ height: 50, width: 50 }} />
                                <div style={{ position: 'relative', width: '100%' }}>
                                    <span className="mine-normal-text mine-vertical-bottom">Messenger</span>
                                </div>
                            </div>
                            <div className="font36 mine-font-grey text-bold mt-lg">Delivering A Small Parcel</div>
                            <div className="mine-font-grey font16 mt">
                                <em className="fa fa-map-marker mr"></em>
                                <span>Smith Street, Jurong West</span>
                            </div>
                            <div className="font22 text-bold mine-font-grey mt-lg">One-time Job: 16 Jul, 2017 10:00 AM - 12:00 PM</div>
                            <div className="font22 text-bold mine-font-grey mt-lg">Quote Your Price</div>
                            <div className="font15 mine-font-grey mr30 pr30 mt45">
                                Need someone to deliver a small parcel from West Jurong to Bagan Datoh. Parcel size is 30x15x10cm weights 2 kg.
                                </div>
                            <div className="flex-left mt-lg pt-lg">
                                <Button bsClass="btn btn-oval btn-info btn-outline small-button">gardening</Button>
                                <Button bsClass="btn btn-oval btn-info btn-outline ml small-button">landscaping</Button>
                                <Button bsClass="btn btn-oval btn-info btn-outline ml small-button">horticulture</Button>
                            </div>

                        </Col>
                    </Row>

                </div>
                <div className="mine-back-info-opacity flex-row" style={{ width: '100%' }}>
                    <div className="container mt45 mb45 flex-row">
                        <div className="">
                            <div>
                                <div className="font48 mine-font-info">Have a similar service?</div>
                                <div className="font30 mine-font-black">Start listing your services with us now!</div>
                            </div>
                        </div>
                        <div className="flex-right-center flex-grow-1">
                            <Button bsClass="btn btn-oval btn-info width270 height70 font18 text-bold">Post Service</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default JobsDetail;


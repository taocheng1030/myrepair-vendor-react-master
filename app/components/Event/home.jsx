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

class EventViewAll extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
            categories: [
                { icon: 'img/mine/boiler_middle.png', title: 'Cooking & Baking', value: true },
                { icon: 'img/mine/education_middle.png', title: 'Education', value: false },
                { icon: 'img/mine/exploration_middle.png', title: 'Exploration', value: true },
                { icon: 'img/mine/family_middle.png', title: 'Family', value: true },

                { icon: 'img/mine/gardening_middle.png', title: 'Gardening', value: true },
                { icon: 'img/mine/leisure_middle.png', title: 'Leisure', value: false },
                { icon: 'img/mine/social_middle.png', title: 'Social', value: true },
                { icon: 'img/mine/baseball_middle.png', title: 'Sports', value: true },
            ],
            locations: [
                { title: 'Bagan Datoh', value: true },
                { title: 'Eunos', value: false },
                { title: 'Jurong East', value: true },
                { title: 'Jurong West', value: true },
            ]
        }

        this.handlePageChanged = this.handlePageChanged.bind(this);

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }
    renderEventItem(item, index) {
        return (
            <div className="mb-lg mt-lg height-100">
                <img alt="Mail Avatar" src="img/user/01.jpg" className="avatar-100 pull-left mr30" />

                <div className="mb-mail-meta">
                    <div className="pull-left">
                        <div className="mine-font-primary font15 text-bold">
                            <Image src={baseball} className="mr" />
                            Football Match
                        </div>
                        <div className="mine-font-grey font13 mt mb">
                            <em className="icon-clock mr"></em>
                            <span>16 Jul, 2017 10:00 AM - 12:00 PM</span>
                        </div>
                        <div className="mine-font-grey font13">
                            <em className="fa fa-map-marker mr"></em>
                            <span>Ole Ole Bola</span>
                        </div>
                        <div className="mine-font-warning font13 mt8">
                            <span>10 people have joined this event recently!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    renderClubItem(item, index) {
        return (
            <div className="mb-lg mt-lg">
                <img alt="Mail Avatar" src="img/user/01.jpg" style={{ height: 200, width: 270 }} />

                <div className="mt-lg">
                    <div className="mine-font-primary font15 text-bold">
                        <Image src="img/mine/social.png" className="mr thumb16" />
                        We love happy garden!
                    </div>
                    <div className="mine-font-grey font13 mt mb">
                        <span>Happy Garden, Jurong West.</span>
                    </div>
                    <div className="mine-font-grey font13">
                        <em className="icon-people mr"></em>
                        <span>288</span>
                    </div>
                </div>
            </div>
        )
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }
    render() {
        return (
            <div className="mine-back-white mine-border-bottom pb45 mt76">
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/goclub_event_home.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '35%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title">Find GoClubs<br />& Events</div>
                            <div className="mine-back-content">Millions of people have joined<br />jacksGoGo to turn their ideas into reality</div>
                            <div className="flex-left mt45" style={{ position: 'relative', width: 670 }}>
                                <FormControl type="text" placeholder="Find Services, Jobs, GoClubs or Events..." className="form-control mine-primary-big-input" />
                                <div className="big-sign mine-back-primary" style={{ right: 5 }}>
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
                        <Col sm={12}>
                            <div className="mt45 mb-lg pb-lg">
                                <span className="mine-sub-title line-height-35">13,327 Services</span>
                                <div className="pull-right">
                                    <div className="font20 mine-font-primary mr-lg">View All GoClubs</div>
                                </div>
                            </div>
                            <div>

                                {this.state.data.map((item, index) => {
                                    return (
                                        <div key={index} className="mr-lg" style={{ display: 'inline-block' }}>
                                            {this.renderClubItem(item, index)}
                                        </div>
                                    )
                                })}
                            </div>
                        </Col>
                    </Row>

                </div>

                <div className="ml60 text-center mt45">
                    <div className="font48 mine-font-primary">Find GoClubs</div>
                    <div className="font24 mine-font-grey text-bold mb-lg mt-lg">Total 2,156 GoClubs</div>
                </div>
                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/boiler.png" />
                            <div className="font22 mine-font-black mt mb">Cooking &<br /> Baking</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/book.png" />
                            <div className="font22 mine-font-black mt mb">Education</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/exploration.png" />
                            <div className="font22 mine-font-black mt mb">Exploration</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/family.png" />
                            <div className="font22 mine-font-black mt mb">Family</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/gardening.png" />
                            <div className="font22 mine-font-black mt mb">Gardening</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/leisure.png" />
                            <div className="font22 mine-font-black mt mb">Leisure</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/social.png" />
                            <div className="font22 mine-font-black mt mb">Social</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/baseball-bg.png" />
                            <div className="font22 mine-font-black mt mb">Sports</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mine-border-bottom mt-lg pb45">
                    <Col lg={3} />
                    <Col lg={3}>
                        <div className="mine-item-button">
                            <div className="mine-item-sign mine-back-primary mine-item-40">
                                <em className="fa fa-plus"></em>
                            </div>
                            <div className="mine-item-text-container">
                                <span className="mine-item-text">Post New GoClub</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="mine-item-button">
                            <div className="mine-item-sign mine-back-primary mine-item-40">
                                <em className="fa fa-eye"></em>
                            </div>
                            <div className="mine-item-text-container">
                                <span className="mine-item-text">View All GoClubs</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} />
                </Row>


                {/* --------------- Event --------------- */}
                <div className="container">
                    <Row>
                        <Col sm={9}>
                            <div className="mt45 mb-lg pb-lg">
                                <span className="mine-sub-title line-height-35">13,327 Services</span>
                            </div>
                            <div>
                                <table className="table mb-mails">
                                    <tbody>
                                        {this.state.data.map((item, index) => {
                                            return (
                                                <tr key={index} className="mine-border-bottom">
                                                    {this.renderEventItem(item, index)}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        <Col sm={3} className="pl0 text-center">
                            <div className="font20 mine-font-primary text-bold mt45">View All Events</div>
                        </Col>
                    </Row>

                </div>
                <div className="ml60 text-center mt45">
                    <div className="font48 mine-font-primary">Find Events</div>
                    <div className="font24 mine-font-grey text-bold mb-lg mt-lg">Total 2,156 Events</div>
                </div>
                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/boiler.png" />
                            <div className="font22 mine-font-black mt mb">Cooking &<br /> Baking</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/book.png" />
                            <div className="font22 mine-font-black mt mb">Education</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/exploration.png" />
                            <div className="font22 mine-font-black mt mb">Exploration</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/family.png" />
                            <div className="font22 mine-font-black mt mb">Family</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/gardening.png" />
                            <div className="font22 mine-font-black mt mb">Gardening</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/leisure.png" />
                            <div className="font22 mine-font-black mt mb">Leisure</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/social.png" />
                            <div className="font22 mine-font-black mt mb">Social</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/baseball-bg.png" />
                            <div className="font22 mine-font-black mt mb">Sports</div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-lg">
                    <Col lg={3} />
                    <Col lg={3}>
                        <div className="mine-item-button">
                            <div className="mine-item-sign mine-back-primary mine-item-40">
                                <em className="fa fa-plus"></em>
                            </div>
                            <div className="mine-item-text-container">
                                <span className="mine-item-text">Post New Event</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className="mine-item-button">
                            <div className="mine-item-sign mine-back-primary mine-item-40">
                                <em className="fa fa-eye"></em>
                            </div>
                            <div className="mine-item-text-container">
                                <span className="mine-item-text">View All Events</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} />
                </Row>
            </div >
        );
    }

}


export default EventViewAll;


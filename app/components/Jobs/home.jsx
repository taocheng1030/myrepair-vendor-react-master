import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import ReactStars from 'react-stars'
import Pager from 'react-pager';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const baseball = require('../../img/mine/baseball.png')
const avatar_image = require('../../img/mine/avatar1.png')

import JacksMapView from './JacksMapView'

class Home extends React.Component {

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
                { icon: 'img/mine/boiler.png', title: 'Cooking & Baking', value: true },
                { icon: 'img/mine/book.png', title: 'Education', value: false },
                { icon: 'img/mine/tools.png', title: 'Handyman', value: true },
                { icon: 'img/mine/brush-bg.png', title: 'Househole Chores', value: true },

                { icon: 'img/mine/messenger.png', title: 'Messenger', value: true },
                { icon: 'img/mine/runner.png', title: 'Running Man', value: false },
                { icon: 'img/mine/baseball-bg.png', title: 'Sports', value: true },
                { icon: 'img/mine/more.png', title: 'Other professions', value: true },
            ],
            locations: [
                { title: 'Bagan Datoh', value: true },
                { title: 'Eunos', value: false },
                { title: 'Jurong East', value: true },
                { title: 'Jurong West', value: true },
            ],
            showJobModal: false,
            showMapModal: false,
        }

        this.handlePageChanged = this.handlePageChanged.bind(this);

    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }
    renderItem(item, index) {
        return (
            <div className="mb-lg mt-lg height-100">
                <img alt="Mail Avatar" src="img/user/01.jpg" className="avatar-100 pull-left mr30" />
                <div className="mb-mail-date pull-right text-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p className="mine-font-black font14">Quote Your Price</p>
                    <div className="mine-heart-icon mine-item-40">
                        <em className="fa fa-heart mine-font-info"></em>
                    </div>
                </div>
                <div className="mb-mail-meta">
                    <div className="pull-left">
                        <div className="mine-font-info font15 text-bold">
                            <Image src={baseball} className="mr" />
                            Tenis Coach
                        </div>
                        <div className="mine-font-grey font14 text-nowrap">
                            <div className="pull-left mr">
                                <ReactStars
                                    count={5}
                                    size={20}
                                    half={true}
                                    value={3.5}
                                    edit={false}
                                    color2={'#ffd700'} />
                            </div>
                            <span className="text-bold line-height-30">3.5</span>
                            <span> Good(2,224 reviews)</span>
                        </div>
                        <div className="mine-font-grey font13">
                            <em className="fa fa-map-marker mr"></em>
                            <span>West, Jurong West</span>
                        </div>
                        <div className="mine-font-warning font13 mt8 text-nowrap">
                            <span>2,328 people have booked this service!</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    closeModal() {
        this.setState({ showJobModal: false, showMapModal: false })
    }

    renderModal() {
        return (
            <div>
                <Modal show={this.state.showJobModal} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-1100">
                    <div className="text-center font22 mine-font-grey mt45 ">Quick Jobs</div>
                    <Row className="mt45">
                        <Col sm={6} className="text-center">
                            <div className="font22 mine-font-black text-bold">Need A Job Done?</div>
                            <div className="font16 mine-font-grey mt-lg">Quick Jobs are perfect for a short job<br />that is needed in a very short time</div>
                            <div className="mt45 pt-lg">
                                <Button bsClass="btn btn-oval btn-info width370 height70 font18 text-bold">Post A New Quick Job</Button>
                            </div>
                        </Col>
                        <Col sm={6} className="text-center">
                            <div className="font22 mine-font-black text-bold">Ready For Job?</div>
                            <div className="font16 mine-font-grey mt-lg">Quick Jobs are perfect for a short job<br />that is needed in a very short time</div>
                            <div className="mt45 pt-lg">
                                <Button bsClass="btn btn-oval btn-info width370 height70 font18 text-bold">I Am Free & Ready To Take On Jobs Now</Button>
                            </div>
                        </Col>

                    </Row>
                    <div className="mt45 pb45" style={{ width: '100%', textAlign: '-webkit-center' }}>
                        <div className="mine-default-small-button pt-sm text-bold mine-pointer" onClick={() => this.closeModal()}>CANCEL</div>
                    </div>
                </Modal>
                <Modal show={this.state.showMapModal} onHide={this.closeModal.bind(this)} id="show-point" className="no-border-radius modal-width-full">
                    <JacksMapView />
                </Modal>
            </div>
        )
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }
    render() {
        return (
            <div className="mine-back-white mt76">
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/job_home_back.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title">Find Jobs</div>
                            <div className="mine-back-content">Millions of people have joined<br />jacksGoGo to turn their ideas into reality</div>
                            <div className="flex-left mt45 width670" style={{ position: 'relative' }}>
                                <FormControl type="text" placeholder="Service Keywords" className="form-control mine-info-big-input" />
                                <div className="info-big-sign" style={{ right: 5 }}>
                                    Search
                                    </div>
                                <div className="mine-item-sign mine-font-info mine-item-40" style={{ left: 10 }}>
                                    <span className="fa fa-search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mine-border-bottom">
                    <Row>

                        <Col sm={3} smPush={9} className="pl0 pt-lg pb45">
                            <div className="mine-item-button width200 ml60" onClick={() => this.setState({ showMapModal: true })}>
                                <div className="mine-item-sign mine-back-info mine-item-40 pt-sm">
                                    <em className="icon-map"></em>
                                </div>
                                <div className="mine-item-text-container">
                                    <span className="mine-item-text">Map View</span>
                                </div>
                            </div>

                            <div className="mt-lg pt-lg">
                                <div className="mine-menu-item mine-menu-selected-info">
                                    <span>Browse all</span>
                                </div>
                                <div className="mine-menu-item">
                                    <span>Browse categories</span>
                                </div>
                            </div>

                            <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left">
                                    Category
                                <div className="pt-sm ml-lg">
                                        <em className="fa fa-sort-up" />
                                    </div>
                                </div>
                                <div className="clearfix mb-lg mine-info-check">
                                    {this.state.categories.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox mt-lg">
                                                <label className="mine-small-normal-text text-nowrap">
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

                            <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left">
                                    Location
                                <div className="pt-sm ml-lg">
                                        <em className="fa fa-sort-up" />
                                    </div>
                                </div>
                                <div className="clearfix mb-lg mine-info-check">
                                    {this.state.locations.map((item, index) => {
                                        return (
                                            <div key={index} className="checkbox c-checkbox mt-lg">
                                                <label className="mine-small-normal-text">
                                                    <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value} />
                                                    <em className="fa fa-check"></em>
                                                    {item.title}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="mt45 ml60">
                                <div className="font14 mine-font-grey flex-left">
                                    Location
                                <div className="pt-sm ml-lg">
                                        <em className="fa fa-sort-up" />
                                    </div>
                                </div>
                                <FormControl type="text" placeholder="Date" className="form-control mine-info-input" />
                                <FormControl type="text" placeholder="Time" className="form-control mine-info-input" />
                                <div className="font14 mine-font-grey mt45">Show Only Services With <br /> the Keywords</div>
                                <div className="flex-left" style={{ position: 'relative' }}>
                                    <FormControl type="text" placeholder="Service Keywords" className="form-control mine-info-input" />
                                    <div className="mine-item-sign mine-back-info mine-item-40" style={{ right: 0 }}>
                                        <span className="fa fa-plus" />
                                    </div>
                                </div>
                                <div>
                                    <div className="mine-tag-info mt pl35 pr50">
                                        gardening
                                    <div className="mine-item-sign mine-back-info mine-item-25 font16 pt0" style={{ right: -1 }}>
                                            <span className="fa fa-close" />
                                        </div>
                                    </div>
                                    <div className="mine-tag-info mt pl35 pr50">
                                        horticulture
                                    <div className="mine-item-sign mine-back-info mine-item-25 font16 pt0" style={{ right: -1 }}>
                                            <span className="fa fa-close" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={9} smPull={3} className="mine-border-right">
                            <div className="mt45 mb-lg pb-lg">
                                <span className="mine-sub-title line-height-35">13,327 Services</span>
                                <div className="pull-right">
                                    <span className="line-height-35">Sort by: </span>
                                    <FormControl componentClass="select" name="account" className="form-control m-b pull-right mine-filter-option" >
                                        <option>Distance</option>
                                        <option>Favorite</option>
                                        <option>Price</option>
                                        <option>Kind</option>
                                    </FormControl>
                                </div>
                            </div>
                            <div>
                                <table className="table mb-mails">
                                    <tbody>
                                        {this.state.data.map((item, index) => {
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

                <div className="ml60 text-center mt45">
                    <div className="font48 mine-font-info">Find Jobs</div>
                    <div className="font24 mine-font-grey text-bold mb-lg mt-lg">Total 4,456 Jobs</div>
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
                            <Image src="img/mine/tools.png" />
                            <div className="font22 mine-font-black mt mb">Handyman</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/brush-bg.png" />
                            <div className="font22 mine-font-black mt mb">Household<br />Chores</div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/messenger.png" />
                            <div className="font22 mine-font-black mt mb">Messenger</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/runner.png" />
                            <div className="font22 mine-font-black mt mb">Running<br />Man</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/baseball-bg.png" />
                            <div className="font22 mine-font-black mt mb">Sports</div>
                        </div>
                    </Col>
                    <Col lg={3} sm={6}>
                        <div className="text-center shadow-hover pb-lg pt-lg mine-pointer">
                            <Image src="img/mine/more.png" />
                            <div className="font22 mine-font-black mt mb">Other<br />Professions</div>
                        </div>
                    </Col>
                </Row>
                <div className="mine-border-bottom">
                    <div className="container mt-lg pb45">
                        <Row>
                            <Col sm={4} smOffset={1}>
                                <Button bsClass="btn btn-oval btn-info btn-outline mine-default-button height70" style={{ width: '100%' }}
                                    onClick={() => this.setState({ showJobModal: true })}>Quick Jobs</Button>
                            </Col>
                            <Col sm={3}>
                                <div className="mine-item-button">
                                    <div className="mine-item-sign mine-back-info mine-item-40">
                                        <em className="fa fa-plus"></em>
                                    </div>
                                    <div className="mine-item-text-container">
                                        <span className="mine-item-text">Post New Job</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={3}>
                                <div className="mine-item-button">
                                    <div className="mine-item-sign mine-back-info mine-item-40">
                                        <em className="fa fa-eye"></em>
                                    </div>
                                    <div className="mine-item-text-container">
                                        <span className="mine-item-text">View All Jobs</span>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default Home;


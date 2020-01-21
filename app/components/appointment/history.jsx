import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import Pager from 'react-pager';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')
import AppHeader from './header'

class AppointmentHistory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            options: [
                { title: 'Jobs posted', value: true },
                { title: 'Jobs accepted', value: false },
                { title: 'Invited jobs', value: true },
                { title: 'Quick jobs', value: true },
                { title: 'Events joined', value: false },
                { title: 'Events posted', value: true }
            ],
            data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
            ],
            total: 337,
            current: 1,
            visiblePage: 7,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mine-border-top" >
                <AppHeader titles={['Pendding', 'Confirmed', 'History']} links={['app-pendding', 'app-confirmed', 'app-history']} cur="History" />
                <div className="container">
                    <Row>

                        <Col sm={3} smPush={9} className="pt-lg pl45 pb45">
                            <div className="font14 mine-font-grey mt45 mb45">Show only</div>
                            {this.state.options.map((item, index) => {
                                return (
                                    <div key={index} className="checkbox c-checkbox mt-lg">
                                        <label className="mine-small-normal-text mine-font-grey text-nowrap">
                                            <input type="checkbox" value="" name="remember" className="mine-check-box" defaultChecked={item.value} />
                                            <em className="fa fa-check mr-lg"></em>
                                            {item.title}
                                        </label>
                                    </div>
                                )
                            })}
                            <div className="mine-font-grey font14 mt45 pt-lg">
                                <span>Search</span>
                                <div className="form-group has-feedback mt-lg mine-width-200">
                                    <FormControl type="text" placeholder="Search through list" className="form-control mine-search-input" />
                                    <span className="fa fa-search form-control-feedback text-muted mine-search-sign"></span>
                                </div>
                            </div>
                            <div style={{ height: 60 }} />
                        </Col>
                        <Col sm={9} smPull={3} style={{ borderRightWidth: 1, borderRightColor: '#ebebeb', borderRightStyle: 'solid' }}>
                            <div className="flex-left-center mt-lg" style={{ marginRight: -15 }}>
                                <div className="font36 mine-font-success text-bold text-center width70">
                                    18<div className="font22 mine-font-success">Jul</div></div>
                                <div className="width170">
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <Image src={avatar_image} className="img-circle thumb64 ml30" />
                                        {/* <div className="top-right-circle mine-back-danger mine-font-white flex-center-center">2</div> */}
                                    </div>
                                </div>
                                <div className="ml-lg">
                                    <div className="font15 text-bold mine-font-success">Gardening</div>
                                    <div className="font13 mine-font-grey mt">needed on 18, Jul, 2017</div>
                                </div>
                            </div>

                            <div className="flex-left-center mt-lg" style={{ marginRight: -15 }}>
                                <div className="font36 mine-font-success text-bold text-center width70">
                                    18<div className="font22 mine-font-success">Jul</div></div>
                                <div className="width170">
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <Image src={avatar_image} className="img-circle thumb64 ml30" />
                                        {/* <div className="top-right-circle mine-back-danger mine-font-white flex-center-center">2</div> */}
                                    </div>
                                </div>
                                <div className="ml-lg">
                                    <div className="font15 text-bold mine-font-success">Gardening</div>
                                    <div className="font13 mine-font-grey mt">needed on 18, Jul, 2017</div>
                                </div>
                            </div>

                            <div className="flex-left-center mt-lg" style={{ marginRight: -15 }}>
                                <div className="font36 mine-font-info text-bold text-center width70">
                                    21<div className="font22 mine-font-info">Jul</div></div>
                                <div className="width170">
                                    <div />
                                </div>
                                <div className="ml-lg full-width">
                                    <div className="font15 text-bold mine-font-info">Bring my dog to her grooming and spa</div>
                                    <div className="font13 mine-font-grey mt">needed on 21, Jul, 2017</div>
                                </div>
                                <div style={{ position: 'relative' }}>
                                    <Image src={avatar_image} className="img-circle thumb64 mr30" />
                                    {/* <div className="top-left-circle mine-back-danger mine-font-white flex-center-center">!</div> */}
                                </div>
                            </div>
                            <div className="flex-left-center mt-lg" style={{ marginRight: -15 }}>
                                <div className="font36 mine-font-success text-bold text-center width70">
                                    18<div className="font22 mine-font-success">Jul</div></div>
                                <div className="width170">
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <Image src={avatar_image} className="img-circle thumb64 ml30" />
                                        {/* <div className="top-right-circle mine-back-danger mine-font-white flex-center-center">2</div> */}
                                    </div>
                                </div>
                                <div className="ml-lg">
                                    <div className="font15 text-bold mine-font-success">Gardening</div>
                                    <div className="font13 mine-font-grey mt">needed on 18, Jul, 2017</div>
                                </div>
                            </div>
                            <div className="flex-left-center mt-lg" style={{ marginRight: -15 }}>
                                <div className="font36 mine-font-success text-bold text-center width70">
                                    18<div className="font22 mine-font-success">Jul</div></div>
                                <div className="width170">
                                    <div style={{ position: 'relative', display: 'inline-block' }}>
                                        <Image src={avatar_image} className="img-circle thumb64 ml30" />
                                        {/* <div className="top-right-circle mine-back-danger mine-font-white flex-center-center">2</div> */}
                                    </div>
                                </div>
                                <div className="ml-lg">
                                    <div className="font15 text-bold mine-font-success">Gardening</div>
                                    <div className="font13 mine-font-grey mt">needed on 18, Jul, 2017</div>
                                </div>
                            </div>
                            
                            <div style={{ height: 60 }} />
                        </Col>
                    </Row>

                </div>
            </div>
        );
    }

}


export default AppointmentHistory;


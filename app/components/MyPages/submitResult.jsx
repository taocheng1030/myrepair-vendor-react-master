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

class SubmitResult extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                <div className="container">
                    <div className="flex-center-center mt45">
                        <div className="panel panel-default width670">
                            <div className="panel-heading flex-center-center">
                                <Image src="img/largelogo.png" className="width470"/>
                            </div>
                            <div className="panel-body text-center">
                                <div className="font18 mine-font-grey mt-lg">Your device will be dropped off on</div>
                                <div className="font24 mine-font-black text-bold mt-sm">Friday 23rd of March 2018 05:00 PM</div>

                                <div className="font18 mine-font-grey mt-lg">Repair Shop</div>
                                <div className="font24 mine-font-black text-bold mt-sm">We Support IT</div>

                                <div className="font18 mine-font-grey mt-lg">Estimate Price</div>
                                <div className="font24 mine-font-black text-bold mt-sm">£80.00</div>

                                <div className="font18 mine-font-grey mt-lg">An email confirmation has been sent at your registered email address</div>
                                <div className="font24 mine-font-black text-bold mt-sm">
                                    <div className="mine-font-grey font20 text-nowrap">Your Booking Reference: </div> 
                                    <div className="text-nowrap">0A25-0D69-CDC2-DA41</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}


export default SubmitResult;


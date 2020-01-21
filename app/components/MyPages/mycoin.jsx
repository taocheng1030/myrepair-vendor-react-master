import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, PageHeader } from 'react-bootstrap';

import Avatar from 'react-avatar-edit'
import Dropzone from 'react-dropzone';

import AppHeader from './header'

import Api from '../../API/api'
import config from '../../config'

class MyAccount extends React.Component {

    constructor(props) {
        super(props)
        let { user } = Api.getCurrentUser()
        this.state = {
            coinAmount: user.coin_amount,
            amount: 0,
            toAddress: '',
            error: '',
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

    }

    widthdrawl() {
        if (this.state.toAddress == '') {
            this.setState({ error: 'Please input address' })
            return;
        }
        if (this.state.amount < 500) {
            this.setState({ error: 'You must input value bigger than 500' })
            return;
        }

        if (this.state.amount > this.state.coinAmount) {
            this.setState({ error: 'You must input value smaller thatn your balance' })
            return;
        }
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing',  'Customers', 'Buy/Sell', 'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing',  'customers', 'products', 'myaccount', 'mycoin']} cur="My Coin" />

                <div className="container " style={{ minHeight: 600 }}>
                    <div className="text-center font24 mine-font-grey text-bold mt45 pt-lg mb-lg">
                        <Image src="img/coin_logo.png" style={{ height: 150 }} />
                    </div>
                    <Row className="mt-lg mb-lg">
                        <Col sm={6} smPush={3}>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Your balance</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="" className="form-control mine-input-bottom-border pl-lg" disabled="true"
                                        value={this.state.coinAmount} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">To Address</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="" className="form-control mine-input-bottom-border pl-lg"
                                        value={this.state.toAddress} onChange={(e) => this.setState({ toAddress: e.target.value })} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Withdrawal Amount</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="" className="form-control mine-input-bottom-border pl-lg"
                                        value={this.state.amount} onChange={(e) => this.setState({ amount: Number(e.target.value) })} />
                                </Col>
                            </Row>
                            {this.state.error != '' && <div className="mine-back-warning mine-font-white p" style={{ borderRadius: 3 }}>{this.state.error}</div>}
                            <div className="flex-center-center" style={{ flexDirection: 'column' }}>
                                <Button bsClass="mine-facebook-button btn btn-oval btn-primary width270" onClick={(e) => this.widthdrawl(e)}>WidthDrawal</Button>
                            </div>
                        </Col>
                    </Row>
                    <div style={{ height: 100 }} />
                </div>
            </div>
        );
    }

}


export default MyAccount;

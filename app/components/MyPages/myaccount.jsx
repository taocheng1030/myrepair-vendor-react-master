import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import Avatar from 'react-avatar-edit'
import Dropzone from 'react-dropzone';

import AppHeader from './header'

import Api from '../../API/api'
import config from '../../config'

class MyAccount extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            avatar: "img/default.png",
            firstname: "Jacky",
            surname: "Chan",
            address: '',
            address2: '',
            city: '',
            post_code: '',
            county: '',
            mobile_phone: '',
            phone_code: '',
            tex_phone: '',
            email: '',
            description: '',
            company: '',
            drop_off: 0,
            collect: 0,
            maxorder_collection: 3,
            maxorder_dropoff: 3,
            password: '',
            confirmPassword: '',
            info: '',
            error: '',
            overAvatar: false,
            showModal: false,
            files: [],
            preview: null,
            image: "img/default.png",
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        let { user } = Api.getCurrentUser()
        console.log('componentDidMount')
        console.log(user)
        if (user.collect == 0) user.maxorder_collection = 3
        if (user.drop_off == 0) user.maxorder_dropoff = 3
        console.log(user.collect, user.maxorder_collection);
        this.setState({
            id: user.id,
            avatar: user.profile_pic != '' ? config.BACKEND_FILE_URL + user.profile_pic : "img/default.png",
            firstname: user.firstname,
            surname: user.surname,
            address: user.address,
            address2: user.address2,
            city: user.city,
            post_code: user.post_code,
            county: user.county,
            mobile_phone: user.mobile_phone,
            phone_code: user.phone_code,
            tex_phone: user.tex_phone,
            email: user.email,
            description: user.description,
            company: user.company,
            drop_off: user.drop_off,
            collect: user.collect,
            maxorder_collection: user.maxorder_collection,
            maxorder_dropoff: user.maxorder_dropoff,
            files: [{ preview: config.BACKEND_FILE_URL + user.profile_pic }],
            changed: false,
            editAvatar: false,
        })

    }


    renderModal() {
        return (
            <Modal show={this.state.editAvatar} onHide={this.closeModal.bind(this)}>
                <div style={{ margin: 50 }}>
                    <Dropzone className="well p-lg" ref="dropzone" onDrop={this.onDrop.bind(this)} multiple={false} style={{ height: 200, position:'relative' }} >
                        {this.state.files.length && <Image src={this.state.files[0].preview} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                        <div style={{height:'100%', width:'100%', backgroundColor:'rgba(100, 100, 100, 0.3)', position:'absolute', top:0, left:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <div className="mine-font-warning font24 text-bold" >DRAG DROP/CLICK HERE</div>
                        </div>
                    </Dropzone>
                    <div className="text-center mt-lg pt-lg">
                        <Button className="btn btn-Default m-lg" style={{ width: 160 }} onClick={() => this.setState({ editAvatar: false })}>Cancel</Button>
                        <Button className="btn btn-primary m-lg" style={{ width: 160 }} onClick={() => {
                            this.setState({ avatar: this.state.files[0].preview, editAvatar: false })
                        }}>Done</Button>
                    </div>
                </div>

            </Modal>
        )
    }

    onAvatarOver(event) {
        this.setState({ overAvatar: true })
    }

    onAvatarOut(event) {
        this.setState({ overAvatar: false })
    }

    closeModal() {
        this.setState({ editAvatar: false })
    }

    showModal() {
        this.setState({ editAvatar: true, changed: false })
        this.setState((old) => {
            this.state.files = [{ preview: this.state.avatar }]
        })
    }

    onDrop(files) {
        this.setState({
            files: files,
            changed: true,
        });
    }

    submitProfile(e) {
        e.preventDefault()
        e.stopPropagation()

        if (this.state.password != '') {
            if (this.state.password != this.state.confirmPassword) {
                this.setState({ error: 'Mismatch confirm password!' })
                setTimeout(() => this.setState({ error: '' }), 3000)
                return;
            }
            Api.changePassword('', this.state.password, (err, res) => {
                if (err == null) {
                    this.setState({ info: 'Changed password successfully!' })
                    setTimeout(() => this.setState({ info: '' }), 3000)
                } else {
                    this.setState({ err: 'Fail to change password' })
                    setTimeout(() => this.setState({ error: '' }), 3000)
                }
            })
        }

        if (this.state.changed) {
            Api.uploadFile(this.state.files[0], (res) => {
                this.state.profile_pic = res.path
                Api.updateProfile(this.state, (err1, res1) => {
                    if (err1 == null) {
                        this.setState({ info: 'Updated profile successfully!' })
                        setTimeout(() => this.setState({ info: '' }), 3000)
                    } else {
                        this.setState({ err: 'Fail to update profile' })
                        setTimeout(() => this.setState({ error: '' }), 3000)
                    }
                })
            })
        } else {
            console.log('updaing calling api');
            Api.updateProfile(this.state, (err, res) => {
                console.log(err, res)
                if (err == null) {
                    this.setState({ info: 'Updated profile successfully!' })
                    setTimeout(() => this.setState({ info: '' }), 3000)
                } else {
                    this.setState({ err: 'Fail to update profile' })
                    setTimeout(() => this.setState({ error: '' }), 3000)
                }
            })
        }
    }

    render() {
        let allFiles = this.state.files;
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'Buy/Sell',  'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing', 'customers', 'products', 'myaccount', 'mycoin']} cur="My Account" />

                <div className="container ">
                    <div className="text-center font24 mine-font-grey text-bold mt45 pt-lg mb-lg">Hi, {this.state.firstname}</div>
                    <Row>
                        <Col lg={5} lgOffset={1} md={5} mdOffset={1} sm={6} smPush={6} >

                            <div className="flex-center-center" style={{ flexDirection: 'column' }}>
                                <div style={{ position: 'relative', width: 300, height: 150, cursor: 'pointer' }}
                                    onMouseOver={(event) => this.onAvatarOver()} onMouseLeave={(event) => this.onAvatarOut()} onClick={() => this.showModal()} >
                                    <Image src={this.state.avatar} className="mine-pointer" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                                    {this.state.overAvatar && <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(50, 70, 50, 0.5)' }}
                                        className="flex-center-center">
                                        <span className="font22 mine-font-white fa fa-pencil-square-o" />
                                    </div>}
                                </div>
                                <div className="font18 mine-font-primary text-bold mt-lg">{this.state.firstname + ' ' + this.state.surname}</div>
                            </div>
                            <Row className="mt45 mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Change Password</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="password" placeholder="" className="form-control mine-input-bottom-border"
                                        value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Retype Password</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="password" placeholder="" className="form-control mine-input-bottom-border"
                                        value={this.state.confirmPassword} onChange={(e) => this.setState({ confirmPassword: e.target.value })} />
                                </Col>
                            </Row>

                            <div className="flex-center-center sm-hide" style={{ flexDirection: 'column' }}>
                                <Button bsClass="mine-facebook-button btn btn-oval btn-primary width270" onClick={(e) => this.submitProfile(e)}>Save Profile</Button>
                            </div>
                            {this.state.info != '' && <div className="p mine-font-white mine-back-info" style={{ borderRadius: 3 }}>{this.state.info}</div>}
                            {this.state.error != '' && <div className="p mine-font-white mine-back-warning" style={{ borderRadius: 3 }}>{this.state.error}</div>}
                        </Col>
                        <Col lg={5} lgOffset={1} md={5} mdOffset={1} sm={6} smPull={6} >
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">First Name</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border"
                                        value={this.state.firstname} onChange={(event) => { this.setState({ firstname: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Surname</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="6-15 alphanumerical only" className="form-control mine-input-bottom-border"
                                        value={this.state.surname} onChange={(event) => { this.setState({ surname: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Address</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="3 Edgar Buildings George Street" className="form-control mine-input-bottom-border"
                                        value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }} />
                                    <FormControl type="text" placeholder="Bath England BA1 2FJ" className="form-control mine-input-bottom-border mt-lg"
                                        value={this.state.address2} onChange={(event) => { this.setState({ address2: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Town</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="London" className="form-control mine-input-bottom-border"
                                        value={this.state.city} onChange={(event) => { this.setState({ city: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">County</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="Unit Kingdom" className="form-control mine-input-bottom-border"
                                        value={this.state.county} onChange={(event) => { this.setState({ county: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg mb-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">PostCode</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="11000" className="form-control mine-input-bottom-border"
                                        value={this.state.post_code} onChange={(event) => { this.setState({ post_code: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Mobile Number</span>
                                </Col>
                                {/* <Col md={2} sm={3}>
                                    <FormControl type="number" placeholder="+44" className="form-control mine-input-bottom-border no-spinner"
                                        value={this.state.phone_code} onChange={(event) => { this.setState({ phone_code: event.target.value }) }} />
                                </Col> */}
                                <Col md={7} sm={9}>
                                    <FormControl type="number" placeholder="number only" className="form-control mine-input-bottom-border no-spinner"
                                        value={this.state.mobile_phone} onChange={(event) => { this.setState({ mobile_phone: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Telephone</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="number" placeholder="number only" className="form-control mine-input-bottom-border no-spinner"
                                        value={this.state.tex_phone} onChange={(event) => { this.setState({ tex_phone: event.target.value }) }} />
                                </Col>
                            </Row>

                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Email</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="email" placeholder="name@email.com" className="form-control mine-input-bottom-border"
                                        value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Company</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl type="text" placeholder="bigcity" className="form-control mine-input-bottom-border"
                                        value={this.state.company} onChange={(event) => { this.setState({ company: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Shop Description</span>
                                </Col>
                                <Col md={9}>
                                    <textarea rows="5" type="text" placeholder="bigcity" className="form-control mine-border-warning"
                                        value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value }) }} />
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Drop off?</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl componentClass="select" name="account" className="form-control mt"
                                        onChange={(e) => this.setState({ drop_off: Number(e.target.value) })} value={this.state.drop_off}>
                                        <option value={1}>Yes</option>
                                        <option value={0}>No</option>
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Max Orders<br />p/h Dropoff</span>
                                </Col>
                                <Col md={9}>
                                {this.state.drop_off == 0 && <FormControl componentClass="select" name="account" className="form-control mt"
                                        onChange={(e) => this.setState({ maxorder_dropoff: Number(e.target.value) })} value={this.state.maxorder_dropoff} disabled>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </FormControl>
                                }
                                {this.state.drop_off == 1 && <FormControl componentClass="select" name="account" className="form-control mt"
                                        onChange={(e) => this.setState({ maxorder_dropoff: Number(e.target.value) })} value={this.state.maxorder_dropoff}>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </FormControl>
                                }
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Do you collect?</span>
                                </Col>
                                <Col md={9}>
                                    <FormControl componentClass="select" name="collect" className="form-control mt"
                                        onChange={(e) => this.setState({ collect: Number(e.target.value) })} value={this.state.collect}>
                                        <option value={1}>Yes</option>
                                        <option value={0}>No</option>
                                    </FormControl>
                                </Col>
                            </Row>
                            <Row className="mt-lg">
                                <Col md={3} className="pt-sm">
                                    <span className="mine-normal-text">Max Orders<br />p/h Collection</span>
                                </Col>
                                <Col md={9}>
                                    {this.state.collect == 1 && <FormControl componentClass="select" name="account" className="form-control mt"
                                        onChange={(e) => this.setState({ maxorder_collection: Number(e.target.value) })} value={this.state.maxorder_collection}>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </FormControl>}
                                    {this.state.collect == 0 && <FormControl componentClass="select" name="account" className="form-control mt"
                                        onChange={(e) => this.setState({ maxorder_collection: Number(e.target.value) })} value={this.state.maxorder_collection} disabled>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                    </FormControl>}
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                    <div className="flex-center-center sm-show mt-lg" style={{ flexDirection: 'column' }}>
                        <Button bsClass="mine-facebook-button btn btn-oval btn-primary width270" onClick={(e) => this.submitProfile(e)}>Save Profile</Button>
                    </div>

                    <div style={{ height: 100 }} />
                </div>
                {this.renderModal()}
            </div>
        );
    }

}


export default MyAccount;

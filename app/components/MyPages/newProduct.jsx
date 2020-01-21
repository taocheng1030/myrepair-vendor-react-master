import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, PageHeader, Form } from 'react-bootstrap';

import Avatar from 'react-avatar-edit'
import Dropzone from 'react-dropzone';

import AppHeader from './header'

import Api from '../../API/api'
import config from '../../config'

import async from 'async'

class Sell extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            avatar: ["img/empty-photo.jpg", "img/empty-photo.jpg","img/empty-photo.jpg"],
            images: [null, null, null],
            devices: [],
            deviceId: -1,
            description: '',
            serviceId: -1,
            modelId: -1,
            makeId: -1,
            models: [],
            makes: [],
            services: [],
            pricings: [],
            price: '',
            exist: null,
            info: '',
            error: '',

            overAvatar: false,
            showModal: false,


            files: [],
            preview: null,
            image: "img/empty-photo.jpg",
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        Api.getDeviceList((err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({ devices: res.items })
            }
        })
        // Api.getModelList((err, res) => {
        //     console.log(err, res)
        //     if (err == null) {
        //         this.setState({ models: res.items })
        //     }
        // })
        // Api.getMakeList((err, res) => {
        //     console.log(err, res)
        //     if (err == null) {
        //         this.setState({ makes: res.items })
        //     }
        // })
    }

    renderModal() {
        return (
            <Modal show={this.state.editAvatar} onHide={this.closeModal.bind(this)}>
                <div style={{ margin: 50 }}>
                    <Dropzone className="well p-lg" ref="dropzone" onDrop={this.onDrop.bind(this)} multiple={false} style={{ height: 200, position: 'relative' }} >
                        {this.state.files.length && <Image src={this.state.files[0].preview} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />}
                        <div style={{ height: '100%', width: '100%', backgroundColor: 'rgba(100, 100, 100, 0.3)', position: 'absolute', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className="mine-font-warning font24 text-bold" >DRAG DROP/CLICK HERE</div>
                        </div>
                    </Dropzone>
                    <div className="text-center mt-lg pt-lg">
                        <Button className="btn btn-Default m-lg" style={{ width: 160 }} onClick={() => this.setState({ editAvatar: false })}>Cancel</Button>
                        <Button className="btn btn-primary m-lg" style={{ width: 160 }} onClick={() => {
                            this.state.avatar[this.state.selected] = this.state.files[0].preview
                            this.state.images[this.state.selected] = this.state.files[0]
                            this.setState({ avatar: [...this.state.avatar], editAvatar: false })
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

    showModal(index) {
        this.state.selected = index
        this.setState({ editAvatar: true, changed: false })
        this.setState((old) => {
            old.files = [{ preview: old.avatar[index] }]
        })
    }

    onDrop(files) {
        this.setState({
            files: files,
            changed: true,
        });
    }

    submitProduct(e) {
        e.preventDefault()
        e.stopPropagation()

        let { user } = Api.getCurrentUser()
        if (this.state.changed) {

            async.map(this.state.images, (item, done)=>{
                if ( item == null ){
                    done(null, null)
                    return;
                }
                Api.uploadFile(item, (res)=>{
                    done(null, res)
                })
            }, (err, res)=>{
                console.log(err, res)
                Api.postProduct({
                    vendor_id: user.id,
                    description: this.state.description,
                    price: Number(this.state.price),
                    device_id: this.state.deviceId,
                    custom_make: this.state.make,
                    custom_model: this.state.model,
                    byvendor: 1,
                    status: 5,
                    image1: res[0]==null?null:res[0].path,
                    image2: res[1]==null?null:res[1].path,
                    image3: res[2]==null?null:res[2].path,
                }, (err1, res1) => {
                    console.log(err1, res1)
                    if (err1 == null) {
                        swal("Success!", `Your product uploaded successfully`, "success")
                    }
                })
            })
        } else {
            Api.postProduct({
                vendor_id: user.id,
                description: this.state.description,
                price: Number(this.state.price),
                device_id: this.state.deviceId,
                custom_make: this.state.make,
                custom_model: this.state.model,
                byvendor: 1,
                status: 5,
            }, (err, res) => {
                console.log(err, res)
                if (err == null) {
                    swal("Success!", `Your product uploaded successfully`, "success")
                }
            })
        }
    }

    render() {
        return (

                <div className="container ">
                    <div className="text-center font24 mine-font-grey text-bold mt45 pt-lg mb-lg">Please Upload Your Product</div>
                    <Form id="form" onSubmit={(e) => this.submitProduct(e)}>
                        <Row>
                            <Col lg={5} lgOffset={1} md={5} mdOffset={1} sm={6} smPush={6} >

                                <div className="flex-center-center mt">
                                    <div style={{ position: 'relative', width: 300, height: 160, cursor: 'pointer' }}
                                        onMouseOver={(event) => this.setState({ overAvatar1: true })} onMouseLeave={(event) => this.setState({ overAvatar1: false })} onClick={() => this.showModal(0)} >
                                        <Image src={this.state.avatar[0]} alt="Contact" className="mine-pointer" style={{ height: 160, width: 300, objectFit: 'contain' }} />

                                        {this.state.overAvatar1 && <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(50, 70, 50, 0.5)' }}
                                            className="flex-center-center">
                                            <span className="font30 mine-font-white fa fa-pencil-square-o" />
                                        </div>}
                                    </div>
                                </div>
                                <div className="flex-center-center mt">
                                    <div style={{ position: 'relative', width: 300, height: 160, cursor: 'pointer' }}
                                        onMouseOver={(event) => this.setState({ overAvatar2: true })} onMouseLeave={(event) => this.setState({ overAvatar2: false })} onClick={() => this.showModal(1)} >
                                        <Image src={this.state.avatar[1]} alt="Contact" className="mine-pointer" style={{ height: 160, width: 300, objectFit: 'contain' }} />

                                        {this.state.overAvatar2 && <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(50, 70, 50, 0.5)' }}
                                            className="flex-center-center">
                                            <span className="font30 mine-font-white fa fa-pencil-square-o" />
                                        </div>}
                                    </div>
                                </div>
                                <div className="flex-center-center mt">
                                    <div style={{ position: 'relative', width: 300, height: 160, cursor: 'pointer' }}
                                        onMouseOver={(event) => this.setState({ overAvatar3: true })} onMouseLeave={(event) => this.setState({ overAvatar3: false })} onClick={() => this.showModal(2)} >
                                        <Image src={this.state.avatar[2]} alt="Contact" className="mine-pointer" style={{ height: 160, width: 300, objectFit: 'contain' }} />

                                        {this.state.overAvatar3 && <div style={{ position: 'absolute', top: 0, width: '100%', height: '100%', backgroundColor: 'rgba(50, 70, 50, 0.5)' }}
                                            className="flex-center-center">
                                            <span className="font30 mine-font-white fa fa-pencil-square-o" />
                                        </div>}
                                    </div>
                                </div>

                                <div className="flex-center-center mt-lg" style={{ flexDirection: 'column' }}>
                                    <Button type="submit" bsClass="mine-facebook-button btn btn-oval btn-primary width270">Submit</Button>
                                </div>
                                {this.state.info != '' && <div className="p mine-font-white mine-back-info" style={{ borderRadius: 3 }}>{this.state.info}</div>}
                                {this.state.error != '' && <div className="p mine-font-white mine-back-warning" style={{ borderRadius: 3 }}>{this.state.error}</div>}
                            </Col>
                            <Col lg={5} lgOffset={1} md={5} mdOffset={1} sm={6} smPull={6} >
                                <div className="mt-lg">Device</div>
                                <FormControl componentClass="select" name="account" className="form-control"
                                    onChange={(e) => this.setState({ deviceId: Number(e.target.value), makeId: -1 })} required >
                                    <option value={-1}>Select Device</option>
                                    {this.state.devices.map((item, index) => {
                                        return (
                                            <option key={index} value={item.ID}>{item.device_name}</option>
                                        )
                                    })}
                                </FormControl>

                                <Row className="mt45">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Make</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="enter your make name..." className="form-control mine-input-bottom-border"
                                            value={this.state.make} onChange={(event) => { this.setState({ make: event.target.value }) }} required />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Model</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="enter your model name..." className="form-control mine-input-bottom-border"
                                            value={this.state.model} onChange={(event) => { this.setState({ model: event.target.value }) }} required />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Description</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="" className="form-control mine-input-bottom-border"
                                            value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value }) }} required />
                                    </Col>
                                </Row>
                                <Row className="mt-lg">
                                    <Col md={3} className="pt-sm">
                                        <span className="mine-normal-text">Price</span>
                                    </Col>
                                    <Col md={9}>
                                        <FormControl type="text" placeholder="£ 1.00" className="form-control mine-input-bottom-border"
                                            value={this.state.price} onChange={(event) => { this.setState({ price: event.target.value }) }} required />
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </Form>
                    <div style={{ height: 100 }} />
                    {this.renderModal()}
                </div>
        );
    }

}


export default Sell;

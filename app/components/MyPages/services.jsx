import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


import Api from '../../API/api'
import config from '../../config'
class Services extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            week: [
                { name: 'MONDAY' },
                { name: 'TUESDAY' },
                { name: 'WEDNESDAY' },
                { name: 'THURSDAY' },
                { name: 'FRIDAY' },
                { name: 'SATURDAY' },
                { name: 'SUNDAY' },
            ],
            devices: []
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        let { user } = Api.getCurrentUser()
        Api.getDeviceList((err1, res1) => {
            if (err1 == null) {
                this.state.devices = res1.items
                this.setState({ devices: res1.items })
                Api.getDevices(user.id, (err, res) => {
                    if (err == null) {
                        for (var j = 0; j < this.state.devices.length; j++) {
                            this.state.devices[j].status = false
                            for (var i = 0; i < res.items.length; i++) {
                                if (res.items[i].device_id == this.state.devices[j].ID) {
                                    this.state.devices[j].status = true
                                    break;
                                }
                            }
                        }
                        this.setState({devices:[...this.state.devices]})
                    }
                })
            }
        })

    }

    removeItem(index) {
        this.state.devices[index].status = false
        this.setState({ devices: [...this.state.devices] })
        let {user} = Api.getCurrentUser()
        Api.getDevices(user.id, (err, res)=>{
            console.log(err, res)
            for ( var i = 0; i < res.items.length; i ++ ){
                if ( res.items[i].device_id == this.state.devices[index].ID){
                    console.log('--------------')
                    Api.removeDevice(res.items[i].id, (err, res)=>{

                    })
                    break;
                }
            }
        })

    }

    addDevice(index) {
        this.state.devices[index].status = true
        this.setState({ devices: [...this.state.devices] })
        let {user}=Api.getCurrentUser()
        Api.addDevice({
            vendor_id: user.id,
            device_id:this.state.devices[index].ID
        }, (err, res)=>{
          this.props.onAddedDevice();
        })
    }

    render() {
        var ddClass = classNames('animated', 'fadeIn');
        return (
                <div className="container ">
                    <div className="mt45 panel panel-primary">
                        <div className="panel-heading">
                            <span className="fa fa-desktop mr" />Which devices do you service?
                        </div>
                        <div className="panel-body">

                            <Dropdown id="dropdown">
                                {/* <Dropdown.Toggle> */}
                                <Dropdown.Toggle className="mine-normal-button mine-back-warning mine-font-white width270 font14 text-nowrap m mt-lg text-bold" style={{ height: 42 }}>
                                    <div style={{ marginLeft: 20, marginRight: 20 }}><span className="fa fa-plus mr" />Add Device</div></Dropdown.Toggle>
                                {/* </Dropdown.Toggle> */}
                                <Dropdown.Menu className={ddClass}>
                                    {this.state.devices.map((item, index) => {
                                        return (
                                            <MenuItem key={index} eventKey={index} onClick={() => item.status!=true&&this.addDevice(index)}>
                                                <div className="flex-left-center mine-border-bottom width170">
                                                    {item.status && <div className="fa fa-check mine-font-danger" style={{ width: 15 }} />}
                                                    {!item.status && <div className="fa fa-plus mine-font-grey" style={{ width: 15 }} />}
                                                    <Image src={config.BACKEND_FILE_URL + item.image} style={{ height: 40 }} />
                                                    <div className="font14 mine-font-primary text-bold">{item.device_name}</div>
                                                </div>
                                            </MenuItem>
                                        )
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Row className="mt-lg">
                                {this.state.devices.map((item, index) => {
                                    if (!item.status) return null;
                                    return (
                                        <Col sm={4} key={index} style={{ position: 'relative' }}>
                                            <div className="flex-center-center mt mb shadow-hover-box mine-normal-cursor"
                                                style={{ flexDirection: 'column', borderColor: '#eee', borderWidth: 1, borderStyle: 'solid', height: 100 }}>
                                                <div style={{ position: 'absolute', top: 15, right: 25 }}>
                                                    <div className="font24 mine-font-danger fa fa-close service-close mine-pointer"
                                                        onClick={() => this.removeItem(index)} />
                                                </div>
                                                <Image src={config.BACKEND_FILE_URL + item.image} style={{ height: 50 }} />
                                                <div className="font20 mine-font-primary text-bold">{item.device_name}</div>
                                            </div>
                                        </Col>
                                    )
                                })}
                            </Row>
                        </div>
                    </div>
                </div>

        );
    }

}


export default Services;

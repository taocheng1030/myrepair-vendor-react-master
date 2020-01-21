import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, InputGroup, Table } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import AppHeader from './header'

import Api from '../../API/api'
import config from '../../config'
import Services from './services'
class Pricing extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            devices: [],
            deviceId: -1,
            serviceId: -1,
            modelId: -1,
            makeId: -1,
            models: [],
            makes: [],
            services: [],
            old_services: [],
            pricings: [],
            price: 0,
            exist: null,
            info: '',
            error: '',
        }

    }

    init() {
      window.scrollTo(0, 0)

      let { user } = Api.getCurrentUser()
      Api.getDevices(user.id, (err, res) => {
          if (err == null) {
              this.setState({ devices: res.items })
          }
      })
      Api.getServiceList((err, res) => {
          console.log('getServiceList');
          console.log('service', err, res);
          console.log(res.items.length);
          if (err == null) {

              for (let i=0; i < res.items.length; i++){
                console.log(res.items[i]);
                let service_item  = res.items[i];
                this.state.services.push(service_item);
                let service_old_item = res.items[i];
                let cloneOfA = JSON.parse(JSON.stringify(service_old_item));
                this.state.old_services.push(cloneOfA);
              }

              this.setState({ services: [...this.state.services], old_services: [...this.state.old_services]})
              this.state.services[0].price = 1;
              console.log(this.state.services[0].price, this.state.old_services[0].price)
          }
      })
      Api.getModelList((err, res) => {
          console.log(err, res)
          if (err == null) {
              this.setState({ models: res.items })
          }
      })
      Api.getMakeList((err, res) => {
          console.log(err, res)
          if (err == null) {
              this.setState({ makes: res.items })
          }
      })
      Api.getPricingList(user.id, (err, res) => {
          console.log(err, res)
          if (err == null) {
              this.setState({ pricings: res.items })
          }
      })
    }

    componentDidMount() {
      this.init();
    }

    getDeviceName() {
        console.log(this.state.deviceId)
        for (var i = 0; i < this.state.devices.length; i++) {
            if (this.state.devices[i].device_id == this.state.deviceId) {
                this.state.deviceName = this.state.devices[i].device_name
                return this.state.devices[i].device_name
            }
        }
        return '';
    }

    getServiceName() {
        console.log(this.state.serviceId)
        for (var i = 0; i < this.state.services.length; i++) {
            if (this.state.services[i].ID == this.state.serviceId) {
                this.state.serviceName = this.state.services[i].service_name
                return this.state.services[i].service_name
            }
        }
        return '';
    }

    getPrice(serviceId) {
        for (var i = 0; i < this.state.pricings.length; i++) {
            if (this.state.pricings[i].device_id == this.state.deviceId &&
                this.state.pricings[i].service_id == serviceId &&
                (this.state.pricings[i].make_id == -2 || this.state.pricings[i].make_id == this.state.makeId) &&
                (this.state.pricings[i].model_id == -2 || this.state.pricings[i].model_id == this.state.modelId)) {
                return this.state.pricings[i].price;
            }
        }
        return 0;
    }

    onSelectMake(e) {
        this.state.makeId = Number(e.target.value)
        if (this.state.makeId == -2){
            this.setState({ makeId: Number(e.target.value), modelId: -2 })

            this.state.services.map((item, index) => {
                item.price = this.getPrice(item.ID)
            })
            this.setState({ services: [...this.state.services]})

            this.state.old_services.map((item_old, index_old) => {
                item_old.price = this.getPrice(item_old.ID)
            })
            this.setState({old_services: [...this.state.old_services]})
        } else {
            this.setState({ makeId: Number(e.target.value), modelId: -1 })
        }
    }

    onSelectModel(e) {
        this.state.modelId = Number(e.target.value)
        this.setState({ modelId: Number(e.target.value) })

        this.state.services.map((item, index) => {
            item.price = this.getPrice(item.ID)
        })
        this.setState({ services: [...this.state.services] })

        console.log('onSelectModel');
        console.log(this.state.modelId);
        this.state.old_services.map((item_old, index_old) => {
            item_old.price = this.getPrice(item_old.ID)
        })
        this.setState({old_services: [...this.state.old_services] })
    }

    addPrice() {
        let { user } = Api.getCurrentUser()
        if (this.state.modelId == -1) {
            this.setState({ error: 'Please select model correclty!' })
            setTimeout(() => this.setState({ error: '' }), 3000)
            return;
        }
        if (this.state.makeId == -1) {
            this.setState({ error: 'Please select make correclty!' })
            setTimeout(() => this.setState({ error: '' }), 3000)
            return;
        }

        let prices = []
        let makeId = this.state.makeId;
        let modelId = this.state.modelId;

        this.state.services.map((item, index) => {
            console.log(item.price, this.state.old_services[index].price);
            if (item.parent_device == this.state.deviceId && item.price != this.state.old_services[index].price) {
                if (makeId == -2){
                    this.state.makes.map((item_make, index_make) => {
                        if (item_make.parent_device == this.state.deviceId){
                          this.state.models.map((item_model, index_model) => {
                            if (item_model.parent_make == item_make.ID){
                              prices.push({
                                vendor_id: user.id,
                                service_id: item.ID,
                                model_id: item_model.ID,
                                make_id: item_make.ID,
                                device_id: this.state.deviceId,
                                price: Number(item.price)
                              })
                            }
                          });
                        }
                    });
                } else if (modelId == -2){
                    this.state.models.map((item_model, index_model) => {
                      if (item_model.parent_make == makeId){
                        prices.push({
                          vendor_id: user.id,
                          service_id: item.ID,
                          model_id: item_model.ID,
                          make_id: makeId,
                          device_id: this.state.deviceId,
                          price: Number(item.price)
                        })
                      }
                    });
                } else {
                  prices.push({
                      vendor_id: user.id,
                      service_id: item.ID,
                      model_id: makeId,
                      make_id: modelId,
                      device_id: this.state.deviceId,
                      price: Number(item.price)
                  })
                }
            }
        })
        console.log(prices.length, prices);
        Api.addPricing(prices, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({ info: 'Added price successfully!' })
                setTimeout(() => this.setState({ info: '' }), 3000)
                Api.getPricingList(user.id, (err, res) => {
                    if (err == null) {
                        this.setState({ pricings: res.items })
                    }
                })
            }
        })

    }

    AddedDevice(){
      this.init();
    }

    render() {
        var ddClass = classNames('animated', 'fadeIn');
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 800 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'Buy/Sell',  'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing', 'customers', 'products', 'myaccount', 'mycoin']} cur="Pricing"/>
                <Services onAddedDevice={() => this.AddedDevice()}/>
                <div className="container mt45">
                    <div className="panel panel-primary mt-lg">
                        <div className="panel-heading">
                            <span className="fa fa-money mr" />Set Price
                        </div>
                        <div className="panel-body">
                            <div className="mt-lg">Device</div>
                            <FormControl componentClass="select" name="account" className="form-control"
                                onChange={(e) => this.setState({ deviceId: Number(e.target.value), makeId: -1})} >
                                <option value={-1}>Select Device</option>
                                {this.state.devices.map((item, index) => {
                                    return (
                                        <option key={index.toString()} value={item.device_id}>{item.device_name}</option>
                                    )
                                })}
                            </FormControl>

                            <div className="mt-lg">Make</div>
                            <FormControl componentClass="select" name="account" className="form-control" value={this.state.makeId} onChange={(e) => this.onSelectMake(e)} >
                                <option value={-1}>Select Make</option>
                                {this.state.deviceId >= 0 && <option value={-2}>All</option>}
                                {this.state.makes.map((item_make, index_make) =>
                                    item_make.parent_device == this.state.deviceId && <option key={index_make.toString()} value={item_make.ID}>{item_make.make_name}</option>)}
                            </FormControl>


                            <div className="mt-lg">Model</div>
                            {this.state.makeId != -2 && <FormControl componentClass="select" name="account" className="form-control" onChange={(e) => this.onSelectModel(e)} >
                                <option value={-1}>Select Model</option>
                                {this.state.deviceId >= 0 && this.state.makeId != -1 && <option value={-2}>All</option>}
                                {this.state.models.map((item_model, index_model) =>
                                    item_model.parent_make == this.state.makeId && <option key={index_model.toString()} value={item_model.ID}>{item_model.model_name}</option>)}
                            </FormControl>}
                            {this.state.makeId == -2 && <FormControl componentClass="select" name="account" className="form-control" defaultValue={-2} onChange={(e) => this.onSelectModel(e)} disabled>
                                <option value={-1}>Select Model</option>
                                <option value={-2}>All</option>
                                {this.state.models.map((item_model, index_model) =>
                                    item_model.parent_make == this.state.makeId && <option key={index_model.toString()} value={item_model.ID}>{item_model.model_name}</option>)}
                            </FormControl>}
                            <div className="mt-lg">Prices</div>


                            {(this.state.modelId != -1 && this.state.makeId != -1) && this.state.services.map((item_service, index_service) => {
                                if (item_service.parent_device != this.state.deviceId) return null
                                return (
                                    <div key={index_service.toString()} className="mt-lg">
                                        <div className="text-bold mr-lg">{item_service.service_name}</div>
                                        <InputGroup>
                                            <InputGroup.Addon>£</InputGroup.Addon>
                                            <FormControl type="text" value={item_service.price} onChange={(e) => {item_service.price = e.target.value; this.setState({services:[...this.state.services]});  console.log(item_service.price, this.state.old_services[index_service].price) }} />
                                        </InputGroup>
                                    </div>)
                            })}
                            <div className="mt-lg">
                                {this.state.info != '' && <div className="p mine-back-info mine-font-white" style={{ borderRadius: 3 }}>{this.state.info}</div>}
                                {this.state.error != '' && <div className="p mine-back-warning mine-font-white" style={{ borderRadius: 3 }}>{this.state.error}</div>}
                            </div>
                            <div className="mine-normal-button mine-back-warning mine-font-white font14 text-nowrap mt45" style={{ height: 42 }}
                                onClick={() => this.addPrice()}>Add Items To Price List</div>
                        </div>
                    </div>

                    {/* <div className="panel-body">

                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Device</th>
                                    <th>Model</th>
                                    <th>Make</th>
                                    <th>Service</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.pricings.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.device_name}</td>
                                            <td>{item.model_name}</td>
                                            <td>{item.make_name}</td>
                                            <td>{item.service_name}</td>
                                            <td>{item.price}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div> */}
                </div>
            </div>
        );
    }

}


export default Pricing;

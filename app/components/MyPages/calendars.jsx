import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { p, Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, Tab, Tabs, Table } from 'react-bootstrap';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import TimeTable from './timetable'

import AppHeader from './header'
import Api from '../../API/api'

class Calendars extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showLog: false,
            key: 1,
            collect: 1,
            drop_off: 1
        }

    }

    componentDidMount() {
        let { user } = Api.getCurrentUser();
        console.log('componet Did Mount', user);
        this.setState({'collect':user.collect, 'drop_off':user.drop_off});
        if (user.drop_off == 1){
          this.setState({key:1});
        } else if (user.collect == 1) {
          this.setState({key:2});
        }
        window.scrollTo(0, 0)
    }

    handleSelect(key) {
        this.setState({
            key
        });
    }

    setCollect() {
      console.log('set collect');
      let { user } = Api.getCurrentUser();
      user.collect = 1;
      Api.updateProfile(user, (err, res) => {
          console.log(err, res)
          if (err == null) {
              this.setState({collect: res.collect})
              //setTimeout(() => this.setState({ info: '' }), 3000)
          } else {
              this.setState({ collect: 0})
              //setTimeout(() => this.setState({ error: '' }), 3000)
          }
      })
    }

    setDropOff(){
      console.log('setDropOff');
      let { user } = Api.getCurrentUser();
      user.drop_off = 1;
      Api.updateProfile(user, (err, res) => {
          console.log(err, res)
          if (err == null) {
              this.setState({drop_off: res.drop_off})
              //setTimeout(() => this.setState({ info: '' }), 3000)
          } else {
              this.setState({drop_off: 0})
              //setTimeout(() => this.setState({ error: '' }), 3000)
          }
      })
    }

    render() {

        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'Buy/Sell', 'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing', 'customers', 'products', 'myaccount', 'mycoin']} cur="Calendars"/>
                <div className="container ">

                    {/* <div className="mine-normal-button mine-back-primary mine-font-white width170 font14 text-nowrap mt45" style={{ height: 42 }}
                        onClick={() => this.addService()}><span className="fa fa-plus mr" />Make Booking</div> */}
                    <form className="panel mt-lg">
                        <Tabs activeKey={this.state.key} onSelect={this.handleSelect.bind(this)} justified id="tabID">
                            <Tab eventKey={1} title="Drop Off">
                                {this.state.drop_off == 1 && <TimeTable type={0} searchJob={(date) => this.props.history.push('jobs', { date })} />}
                                {this.state.drop_off == 0 && <p className="text-center" style={{fontSize:20, paddingTop:10}}>
                                  You are not currently accpeting drop off. if you would like to accpet drop off, please click
                                  <a onClick={this.setDropOff.bind(this)} style={{cursor:"pointer", marginLeft:10}}>here</a>
                                  </p>}
                            </Tab>
                            <Tab eventKey={2} title="Collect">
                                {this.state.collect == 1 && <TimeTable type={1} searchJob={(date) => this.props.history.push('jobs', { date })} />}
                                {this.state.collect == 0 && <p className="text-center" style={{fontSize:20, paddingTop:10}}>
                                  You are not currently accpeting collections. if you would like to accpet collections, please click
                                  <a onClick={this.setCollect.bind(this)} style={{cursor:"pointer", marginLeft:10}}>here</a>
                                  </p>
                                }
                            </Tab>
                        </Tabs>
                    </form>
                </div>
            </div>
        );
    }
}


export default Calendars;

import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, InputGroup } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import AppHeader from './header'

import Api from '../../API/api'

const Week=[
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
]
class OpeningTimes extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            openTime: [],
            specials: [
            ],
            info: '',
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        let { user } = Api.getCurrentUser()
        Api.getOpenTime(user.id, (err, res) => {
            console.log(err, res)
            if (err == null) {
                if ( res.open_time.length == 0 ){
                    for ( var i = 0; i < 7; i ++ ){
                        res.open_time.push({
                            start_time:0,
                            close_time:0,
                            vendor_id: user.id,
                            day_of_week:i+1,
                            type: 0,
                        })
                    }
                }
                this.setState({ specials: res.special_date, openTime:res.open_time })
            }
        })
    }

    removeItem(index) {
        this.state.specials.splice(index, 1)
        this.setState({ specials: [...this.state.specials] })
        setTimeout(()=>this.sendChanges(), 20)
    }

    addSpecial() {
        if (this.state.date == null) return;
        let { user } = Api.getCurrentUser()
        let d = this.state.date._d;
        this.state.specials.push({
            type: 0,
            kind: 1,
            date: d,
            vendor_id: user.id,
        })
        setTimeout(()=>this.sendChanges(), 20)
    }

    sendChanges(){
        let { user } = Api.getCurrentUser()
        Api.updateSpecialDay({ vendor_id:user.id, special_date: this.state.specials, open_time:this.state.openTime }, (err, res) => {
            if (err == null) {
                this.setState({ specials: [...this.state.specials] })
            }
        })
    }

    saveStandardDays(){
        let { user } = Api.getCurrentUser()
        Api.updateSpecialDay({vendor_id: user.id, open_time:this.state.openTime, special_date: this.state.specials}, (err, res)=>{
            console.log(err, res)
            if (err == null) {
                this.setState({info:'Updated standard opening Times successfully!'})
                setTimeout(()=>this.setState({info:''}), 3000)
            }
        })
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{minHeight:740}}>
                                <AppHeader titles={['Jobs', 'Calendars', 'Search For Jobs', 'Opening Times', 'Services/Pricing',  'Customers', 'Buy/Sell', 'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'search-jobs', 'opening-times', 'pricing',  'customers', 'products', 'myaccount', 'mycoin']} cur="Opening Times" />

                <div className="container mt45">
                    {this.state.info!='' && <div className="p mine-font-white mine-back-info" style={{borderRadius:3}}>{this.state.info}</div>}
                    <div className="mt-lg panel panel-primary">
                        <div className="panel-heading">
                            <span className="fa fa-search mr" />Opening Times
                        </div>
                        <div className="panel-body">
                            <Row>
                                <Col sm={6}>
                                    <div className="font24 mine-font-grey mt-lg mb-lg">Standard Opening Times</div>
                                    {this.state.openTime.map((item, index) => {
                                        return (
                                            <Row key={index} className="p">
                                                <Col sm={3}>
                                                    {Week[item.day_of_week-1]}
                                                </Col>
                                                <Col sm={4}>
                                                    <FormControl componentClass="select" name="account" className="form-control"
                                                    defaultValue={item.start_time} onChange={(e)=>item.start_time=Number(e.target.value)} >
                                                        <option value={0}>Close</option>
                                                        <option value={6}>6.00</option>
                                                        <option value={7}>7.00</option>
                                                        <option value={8}>8.00</option>
                                                        <option value={9}>9.00</option>
                                                        <option value={10}>10.00</option>
                                                        <option value={11}>11.00</option>
                                                        <option value={12}>12.00</option>
                                                        <option value={13}>13.00</option>
                                                        <option value={14}>14.00</option>
                                                        <option value={15}>15.00</option>
                                                        <option value={16}>16.00</option>
                                                        <option value={17}>17.00</option>
                                                        <option value={18}>18.00</option>
                                                        <option value={19}>19.00</option>
                                                        <option value={20}>20.00</option>
                                                        <option value={21}>21.00</option>
                                                        <option value={22}>22.00</option>
                                                        <option value={23}>23.00</option>
                                                    </FormControl>
                                                </Col>
                                                <Col sm={4}>
                                                    <FormControl componentClass="select" name="account" className="form-control"
                                                        defaultValue={item.close_time} onChange={(e)=>item.close_time=Number(e.target.value)} >
                                                        <option value={0}>Close</option>
                                                        <option value={6}>6.00</option>
                                                        <option value={7}>7.00</option>
                                                        <option value={8}>8.00</option>
                                                        <option value={9}>9.00</option>
                                                        <option value={10}>10.00</option>
                                                        <option value={11}>11.00</option>
                                                        <option value={12}>12.00</option>
                                                        <option value={13}>13.00</option>
                                                        <option value={14}>14.00</option>
                                                        <option value={15}>15.00</option>
                                                        <option value={16}>16.00</option>
                                                        <option value={17}>17.00</option>
                                                        <option value={18}>18.00</option>
                                                        <option value={19}>19.00</option>
                                                        <option value={20}>20.00</option>
                                                        <option value={21}>21.00</option>
                                                        <option value={22}>22.00</option>
                                                        <option value={23}>23.00</option>
                                                    </FormControl>
                                                </Col>
                                            </Row>
                                        )
                                    })}
                                    <div className="mine-normal-button mine-back-warning mine-font-white width270 font14 text-nowrap m mt-lg text-bold"
                                        style={{ height: 42 }} onClick={()=>this.saveStandardDays()}>
                                        Save Standard Days</div>
                                </Col>
                                <Col sm={6}>
                                    <div className="font24 mine-font-grey mt-lg">Special Opening/Closing Times</div>
                                    <div className="width320" style={{ marginTop: 25 }}>
                                        <div style={{ position: 'relative' }}>
                                            <div className="form-control" style={{ height: 42, width: '100%', borderRadius: 50 }} />
                                            <div style={{ position: 'absolute', top: 1, left: 18 }}>
                                                <SingleDatePicker
                                                    date={this.state.date} // momentPropTypes.momentObj or null
                                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                                    focused={this.state.focused} // PropTypes.bool
                                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                                    small={true}
                                                    readOnly={true}
                                                    noBorder={true}
                                                    numberOfMonths={1}
                                                    isOutsideRange={() => false}
                                                    customInputIcon={<div className="fa fa-calendar mine-font-warning" />}
                                                />
                                            </div>
                                            <div className="mine-back-warning mine-font-white font12 text-bold flex-center-center mine-pointer"
                                                style={{ position: 'absolute', width: '50%', height: 42, top: 0, right: 0, borderTopRightRadius: 21, borderBottomRightRadius: 21 }}
                                                onClick={() => this.addSpecial()}>
                                                <span className="fa fa-plus mr" />Add Special</div>
                                        </div>
                                    </div>
                                    <Row className="mt-lg">
                                        {this.state.specials.map((item, index) => {
                                            let date = new Date(item.date)
                                            let month = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                            let stringDate = date.getDate() + ' ' + month[date.getMonth()] + ' ' + date.getFullYear()
                                            return (
                                                <Col sm={6} key={index} style={{ position: 'relative' }}>
                                                    <div className="flex-center-center mt mb shadow-hover-box mine-normal-cursor"
                                                        style={{ flexDirection: 'column', borderColor: '#eee', borderWidth: 1, borderStyle: 'solid', height: 100 }}>
                                                        <div style={{ position: 'absolute', top: 15, right: 25 }}>
                                                            <div className="font24 mine-font-danger fa fa-close service-close mine-pointer"
                                                                onClick={() => this.removeItem(index)} />
                                                        </div>
                                                        <div className="mine-font-grey text-bold"><span className="fa fa-calendar mine-font-warning mr" />{stringDate}</div>
                                                        <div className="mine-font-grey">closed</div>
                                                    </div>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default OpeningTimes;

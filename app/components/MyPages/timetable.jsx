import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

import Api from '../../API/api'

class Timetable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            startTime: new Date(),
            vendorId: 1,
            timeState: [],
            timeHeader: [],
            month: '',
            year: 2018,
            selectDate: 0,

            type: props.type
        }
        this.minTime = 9;
        this.maxTime = 18;
    }

    componentDidMount() {
        this.fillCalendar()
    }

    fillCalendar() {
        let week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        let cur = new Date(this.state.startTime)
        this.setState({ month: months[cur.getMonth()], year: cur.getFullYear() })
        cur = this.getMonday(cur)
        let { user } = Api.getCurrentUser()
        Api.getTimeTable(user.id, cur, (err, res) => {
            console.log(err, res)
            let timeState = []
            let timeHeader = []

            let now = new Date()
            let { WorktimeInfo, OrderInfo, SpecialtimeInfo } = res.items
            let minTime = 9, maxTime = 18;
            for (var i = 0; i < WorktimeInfo.length; i++) {
                if (minTime > WorktimeInfo[i].start_time && WorktimeInfo[i].start_time != 0) minTime = WorktimeInfo[i].start_time
                if (maxTime < WorktimeInfo[i].close_time) maxTime = WorktimeInfo[i].close_time
            }
            this.minTime = minTime;
            this.maxTime = maxTime;
            for (var i = 0; i < 7; i++) {
                let col = [];
                for (var j = minTime; j < maxTime; j++) {
                    let status = WorktimeInfo.length > 0 ? (WorktimeInfo[i].start_time <= j && j < WorktimeInfo[i].close_time ? 0 : 1) : 0
                    let selTime = new Date(cur)
                    selTime.setHours(j)
                    if (selTime < now) status = 1;
                    col.push({ label: (j) + ' - ' + (j + 1), status: status, count: 0 })
                }
                timeState.push(col);
                timeHeader.push(week[i] + ' ' + (cur.getDate()) + 'th')

                cur.setDate(cur.getDate() + 1)
            }

            for (var i = 0; i < OrderInfo.length; i++) {
                if (this.state.type != OrderInfo[i].type) continue
                let date = new Date(OrderInfo[i].book_date)
                let day = (date.getDay()+6)%7
                let hour = date.getHours() - minTime
                if (hour >= maxTime - minTime || hour < 0) continue;
                console.log(day, hour)
                timeState[day][hour].count++;
                timeState[day][hour].status = 2;
                if ( timeState[day][hour].count > user.maxorder_dropoff && this.state.type == 0 ||
                    timeState[day][hour].count >= user.maxorder_collection && this.state.type == 1){
                        timeState[day][hour].status = 4
                    }
            }
            for (var i = 0; i < SpecialtimeInfo.length; i++) {
                if (this.state.type != SpecialtimeInfo[i].type) continue
                let date = new Date(SpecialtimeInfo[i].date)
                let day = (date.getDay()+6)%7
                let hour = SpecialtimeInfo[i].hour_start - minTime
                if (SpecialtimeInfo[i].kind == 0) {
                    if (hour >= maxTime - minTime || hour < 0 || timeState[day][hour].status > 0) continue;
                    timeState[day][hour].status = 3;
                } else {
                    for (var j = 0; j < maxTime - minTime; j++) {
                        timeState[day][j].status = 1;
                    }
                }
            }
            this.setState({ timeHeader, timeState })
            this.SpecialtimeInfo = SpecialtimeInfo;
        })
    }

    nextWeek() {
        let date = this.state.startTime
        date.setDate(date.getDate() + 7)
        this.setState({ startTime: date })
        this.fillCalendar()
    }

    prevWeek() {
        let date = this.state.startTime
        date.setDate(date.getDate() - 7)
        this.setState({ startTime: date })
        this.fillCalendar()
    }

    getMonday(date) {
        let beforeMonth = date.getMonth();
        let tmp = new Date(date)
        tmp.setDate(date.getDate() - (tmp.getDay()+6)%7)
        return new Date(tmp);
    }

    nextMonth() {
        let date = new Date(this.state.startTime)
        date.setMonth(date.getMonth() + 1)
        this.state.startTime = date;
        this.setState({ startTime: date })
        this.fillCalendar()
    }

    prevMonth() {
        let date = new Date(this.state.startTime)
        date.setMonth(date.getMonth() - 1)
        this.state.startTime = date;
        this.setState({ startTime: date })
        this.fillCalendar()
    }

    onSelectTime(day, hour, status) {
        day = day
        let cur = this.getMonday(this.state.startTime);
        console.log(cur.getDate());
        cur.setDate(cur.getDate() + day)
        // cur.setHours(cur.getHours()+hour+9)

        console.log(day, hour, status);
        let { user } = Api.getCurrentUser()


        if (status == 0) {

            Api.addNotTaking({
                date: cur,
                hour_start: hour + this.minTime,
                hour_end: hour + this.minTime + 1,
                kind: 0,
                type: this.state.type,
                vendor_id: user.id
            }, (err, res) => {
                if (err == null) {
                    this.fillCalendar()
                }
            })
        } else if ( status == 3 ) {
            for (var i = 0; i < this.SpecialtimeInfo.length; i++) {
                let date = new Date(this.SpecialtimeInfo[i].date)
                console.log(date, date.getDay());
                if (this.SpecialtimeInfo[i].kind == 0
                    && this.SpecialtimeInfo[i].type == this.state.type
                    && this.SpecialtimeInfo[i].hour_start == hour + this.minTime
                    && date.getDay() == (day + 1) % 7) {
                      console.log(date, date.getDay());
                    Api.removeNotTaking(this.SpecialtimeInfo[i].ID, (err, res) => {
                        if (err == null) {
                            this.fillCalendar()
                        }
                    })
                }
            }
        } else{
            this.props.searchJob(cur)
        }

    }


    render() {
        let Color = ['green', 'rgb(255,59,48)', '#1e5799', 'rgb(20,177,248)', '#f16513']
        let COL = -1, ROW = -1

        if (this.state.selectDate != 0) {
            let sel = this.getMonday(this.state.selectDate);
            let cur = this.getMonday(this.state.startTime)
            if (cur.getMonth() == sel.getMonth() && cur.getDate() == sel.getDate() && cur.getFullYear() == sel.getFullYear()) {
                COL = this.state.selectDate.getDay()
                ROW = this.state.selectDate.getHours() - 9
            }
        }
        return (
            <div className="panel panel-warning" style={{ minHeight: 740 }}>
                <div className="panel-heading">
                    <div className="flex-center-bottom">
                        <div className="font13 mine-font-white mine-pointer service-close primary-text-hover flex-left-center"
                            onClick={() => { this.prevWeek() }}>
                            <span className="icon-arrow-left ml mr font20 mine-pointer" />
                            PREV WEEK
                        </div>
                        <div className="mine-back-title mine-font-white font36 flex-center-center" style={{ flex: 1, lineHeight: 1.5 }}>
                            <span className="icon-arrow-left  ml mr mt-sm font30 primary-text-hover mine-pointer"
                                onClick={() => { this.prevMonth() }} />
                            <span className="text-center">{this.state.month} {this.state.year}</span>
                            <span className="icon-arrow-right ml mr mt-sm font30 primary-text-hover mine-pointer"
                                onClick={() => { this.nextMonth() }} />
                        </div>
                        <div className="font13 mine-font-white mine-pointer service-close primary-text-hover flex-right-center"
                            onClick={() => { this.nextWeek() }}>
                            NEXT WEEK
                            <span className="icon-arrow-right ml mr font20 mine-pointer" />
                        </div>
                    </div>
                </div>
                <div className="panel-body" style={{ overflow: 'auto' }}>
                    <Row className="mb-lg">
                        <Col sm={6}>
                            <div className="width270">
                                <div style={{ position: 'relative' }}>
                                    <div className="form-control" style={{ height: 42, width: '100%', borderRadius: 50 }} />
                                    <div style={{ position: 'absolute', top: 1, left: 18 }}>
                                        <SingleDatePicker
                                            date={this.state.date} // momentPropTypes.momentObj or null
                                            onDateChange={date => { this.setState({ date }); this.state.startTime = date._d; this.fillCalendar() }} // PropTypes.func.isRequired
                                            focused={this.state.focused} // PropTypes.bool
                                            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                            small={true}
                                            readOnly={true}
                                            noBorder={true}
                                            numberOfMonths={1}
                                            placeholder={this.state.startTime.getDate() + '/' + (this.state.startTime.getMonth() + 1) + '/' + this.state.startTime.getFullYear()}
                                            isOutsideRange={() => false}
                                            customInputIcon={<div className="fa fa-calendar mine-font-warning" />}
                                        />
                                    </div>
                                    <div className="mine-back-primary mine-font-white font12 text-bold flex-center-center mine-pointer"
                                        style={{ position: 'absolute', width: '40%', height: 42, top: 0, right: 0, borderTopRightRadius: 21, borderBottomRightRadius: 21 }}>
                                        <span className="fa fa-search mr" />Search</div>


                                </div>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="flex-left-center" style={{ height: 38 }}>
                                <div className="mr mine-back-danger" style={{ width: 10, height: 10, backgroundColor: 'red', borderRadius: '50%' }} />
                                <div>Closed</div>
                                <div className="mr ml mine-back-info" style={{ width: 10, height: 10, borderRadius: '50%' }} />
                                <div>Not Taking</div>
                                <div className="mr ml mine-back-warning" style={{ width: 10, height: 10, borderRadius: '50%' }} />
                                <div>Busy</div>
                                <div className="mr ml" style={{ width: 10, height: 10, backgroundColor: 'green', borderRadius: '50%' }} />
                                <div>Free</div>
                            </div>
                        </Col>

                    </Row>
                    <div className="flex-left-center">
                        {this.state.timeHeader.map((col, index) => {
                            return (
                                <div key={index} className="flex-center-center mine-font-grey text-bold font14 text-center"
                                    style={{ width: '14.3%', height: 40, backgroundColor: '#eee', borderColor: 'white', borderWidth: 1, borderStyle: 'solid' }}>
                                    {col}
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex-left-center">
                        {this.state.timeState.map((col, index) => {
                            return (
                                <div key={index} style={{ width: '14.3%' }} className="mine-font-white font13">
                                    {col.map((item, idx) => {
                                        return (
                                            <div key={idx}
                                                onClick={() => (item.status != 1) && this.onSelectTime(index, idx, item.status)}
                                                style={{
                                                    height: 40, borderColor: 'white', borderWidth: 1, borderStyle: 'solid', position: 'relative',
                                                    backgroundColor: Color[item.status],
                                                    cursor: (item.status != 1) ? 'pointer' : 'not-allowed'
                                                }}>
                                                <div className={item.status == 0 ? "hover-increase-5 flex-center-center" : "flex-center-center mine-fullSize"}
                                                    style={{ position: 'absolute', paddingTop:5 }}>{item.label}</div>
                                                {(item.status == 2 || item.status == 4) && <div style={{ position: 'absolute', right: 2, top: 2, color: 'white',
                                                borderRadius:10, backgroundColor:'rgb(20,177,248)', width:16, height:16, fontSize:10, display:'flex', justifyContent:'center',
                                                    alignItems:'center' }}>{item.count}</div>}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }

}


export default Timetable;

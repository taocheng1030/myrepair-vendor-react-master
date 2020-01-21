import React from 'react';
import ReactDom from 'react-dom';
import classNames from 'classnames';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal, Table } from 'react-bootstrap';

import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Pager from 'react-pager';

import AppHeader from './header'

import Api from '../../API/api'

class SoldOut extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 337,
            current: 1,
            visiblePage: 7,
            customers: [],
            soldOut: [],
        }

    }

    componentDidMount() {
        window.scrollTo(0, 0)

        let { user } = Api.getCurrentUser()
        Api.getSoldOut(user.id, (err, res) => {
            console.log(err, res)
            if (err == null) {
                this.setState({ soldOut: res.items })
            }
        })
    }

    handlePageChanged(newPage) {
        this.setState({ current: newPage });
    }

    showJobs(index) {
        this.props.history.push('personal-jobs', { customerId: this.state.customers[index].id, customerName: this.state.customers[index].firstname + ' ' + this.state.customers[index].surname })
    }

    render() {
        var ddClass = classNames('animated', 'fadeIn');
        return (
            <div className="mine-back-white mine-border-bottom mt76" style={{ minHeight: 740 }}>
                <AppHeader titles={['Jobs', 'Calendars', 'Soldout', 'Products',  'Search For Jobs', 'Opening Times', 'Services/Pricing', 'Customers', 'My Account', 'My Coin']}
                    links={['jobs', 'calendars', 'soldout', 'products',  'search-jobs', 'opening-times', 'pricing', 'customers', 'myaccount', 'mycoin']} cur="Soldout" />

                <div className="container ">
                    <div className="mt45 panel panel-primary">
                        <div className="panel-heading">
                            <span className="fa fa-list mr" />Your Customers
                        </div>
                        <div className="panel-body">

                            <Table responsive striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Mobile</th>
                                        <th>Postcode</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.customers.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.firstname + ' ' + item.surname}</td>
                                                <td>{item.email}</td>
                                                <td>{item.tex_phone}</td>
                                                <td>(+{item.phone_code}) {item.mobile_phone}</td>
                                                <td>{item.post_code}</td>
                                                <td>
                                                    <a className="fa fa-eye btn btn-info btn-sm" onClick={() => this.showJobs(index)} />
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>

                            {/* <Pager
                                total={this.state.total}
                                current={this.state.current}
                                visiblePages={this.state.visiblePage}
                                titles={{ first: 'First', last: this.state.total }}
                                className="pagination-sm pull-left mine-pointer"
                                onPageChanged={this.handlePageChanged.bind(this)}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}


export default SoldOut;

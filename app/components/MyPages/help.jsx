import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';


class Terms extends React.Component {

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
                    <div className="mine-font-black font48 text-bold mt45">What is MyDeviceRepair?</div>

                    <div className="mine-font-grey font18 mt45">
                        No expensive EPOS systems, unreliable fax solutions or clumsy emails
                    </div>
                    <div className="mine-font-grey font18 mt-lg">We help stores with online sales on mydevicerepair.co.uk</div>

                    <div className="mine-font-grey font18 mt-lg">Stores receive a new and wider sales channel with unlimited possibilities</div>

                    <div className="mine-font-grey font18 mt-lg">MyDeviceRepair has a clean, easy to use website</div>

                    <div className="mine-font-grey font18 mt-lg">The website is aimed at anyone who has a digital device who is looking for a fast easy way to find repair stores in their local area.</div>

                    <div className="mine-font-grey font18 mt-lg mb45 ">Click here for the Guide to Job Maintenance</div>
                </div>

            </div>
        );
    }

}


export default Terms;


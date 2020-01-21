import React from 'react';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, ContentWrapper } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div id="footer" className="mine-back-primary">
                <div className="container p">
                    <Row>
                        <Col sm={6} className="mt-lg mb-lg">
                            <div className="font14 mine-font-lightgrey ">© Copyright 2017 MyDeviceRepair.co.uk -</div>
                        </Col>
                        <Col sm={6} className="mt-lg mb-lg">
                            {/* <Link to="home" className="font14 mine-pointer text-center mine-font-white"> Do you repair devices and want to list your business?</Link> */}
                            <div className="sm-flex-right-center">
                                <Link to="faqs">
                                    <div className="mine-font-white link-warning-item text-nowrap mr">FAQ</div>
                                </Link>
                                <Link to="terms">
                                    <div className="mine-font-white link-warning-item text-nowrap mr">Terms and Conditions</div>
                                </Link>
                                <Link to="help">
                                    <div className="mine-font-white link-warning-item text-nowrap mr">Help</div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

}

export default Footer;

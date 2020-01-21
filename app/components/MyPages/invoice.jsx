import React from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Grid, Row, Col, Panel, Button, Table, Image } from 'react-bootstrap';

import Api from '../../API/api'
import config from '../../config'

import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

class Invoice extends React.Component {

    constructor(props) {
        super(props)
        this.state = JSON.parse(localStorage.invoiceData)
        let { user } = Api.getCurrentUser()
        this.state.avatar = user.profile_pic != '' ? config.BACKEND_FILE_URL + user.profile_pic : "img/default.png",
            console.log(this.state)
    }

    componentDidMount() {
        $('header').hide()
        $('#footer').hide()
    }

    sendInvoice() {
        var formattedBody = "FirstLine \n Second Line \n Third Line";
        var mailToLink = "mailto:x@y.com?body=" + encodeURIComponent(formattedBody);
        window.location.href = mailToLink;
    }

    printDocument() {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                // pdf.output('dataurlnewwindow');
                pdf.save("invoice.pdf");
            })
            ;
    }

    render() {
        let { order, profile, servicenamelist } = this.state
        return (
            <div className="mt45">
                <div id="divToPrint" className="container" style={{width:720}}>
                    <Panel>
                        <h3 className="mt0">Invoice</h3>
                        <hr />

                        <Row className="mb-lg">
                            <Col lg={6} xs={6} className="br pv">
                                <Row>
                                    <Col md={2} className="text-center">
                                        {/* <em className="fa fa-plane fa-4x text-muted"></em> */}
                                        <Image src={this.state.avatar} style={{ width: 50, objectFit: 'contain' }} />
                                    </Col>
                                    <Col md={10}>
                                        <h4>{order.company}</h4>
                                        <address></address>{order.address}
                                        <br />{order.address2}
                                        <br />{order.post_code}
                                        <br />
                                        <br />Telephone {order.tex_phone}
                                        <br />
                                        <br />
                                        <br />
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} xs={6} className="br pv">
                                <Row>
                                    <Col md={2} className="text-center visible-md visible-lg">
                                        <em className="fa fa-user fa-4x text-muted"></em>
                                    </Col>
                                    <Col md={10}>
                                        <h4>{profile.firstname + ' ' + profile.surname}</h4>
                                        <address></address>{profile.address}
                                        <br />{profile.address2}
                                        <br />{profile.post_code}
                                        <br />
                                        <br />Phone: {profile.tex_phone}
                                        <br />Mobile: {profile.mobile_phone}
                                        <br />Email: {profile.email}
                                    </Col>
                                </Row>
                            </Col>
                                <hr />
                            <div className="col-xs-12 pv">
                                <div className="clearfix">
                                    <p className="pull-left">INVOICE NO.</p>
                                    <p className="pull-right mr">0000{order.ID}</p>
                                </div>
                                <div className="clearfix">
                                    <p className="pull-left">Date</p>
                                    <p className="pull-right mr">{order.book_date}</p>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                <h4>Job Detail</h4>
                                <div>
                                    <br />Make: {order.makename}
                                    <br />Model: {order.modelname}
                                    <br />Device: {order.devicename}
                                    <br />Job Reference: {order.reference_key}
                                </div>
                            </Col>
                            <Col xs={7}>
                                <div className="panel panel-default mt-lg">
                                    <Table className="mb-lg" responsive bordered>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Service</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {servicenamelist.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{item}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </div>
                            </Col>
                        </Row>
                        <Row className="mt-lg">
                            <Col xs={5} className="pv">
                                <div className="text-bold">Customer Comments</div>
                                <div className="font16 mt">{order.description}</div>
                            </Col>
                            <Col xs={7} className="pv">
                                <div className="text-bold">Job Comments</div>
                                <textarea rows="3" type="text" placeholder="write here..." className="form-control mine-border-warning mt" value={order.comment} />
                                <div className="clearfix">
                                    <p className="pull-left h3">TOTAL</p>
                                    <p className="pull-right mr h3">£ {order.price}</p>
                                </div>
                            </Col>
                        </Row>

                        <hr className="hidden-print" />
                        <div className="clearfix">
                            <Button bsStyle="default" onClick={() => { window.print() }} className="pull-left">Print</Button>
                            <Button bsStyle="primary" className="pull-right" onClick={() => this.printDocument()}>Download</Button>
                        </div>
                    </Panel>
                </div>
            </div>
        );
    }

}

export default Invoice;

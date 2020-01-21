import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';


class Contact extends React.Component {

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
            <div className="mine-back-white mine-border-bottom" style={{minHeight:740}}>
                <div style={{ position: 'relative' }}>
                    <Image src="img/bg11.jpg" style={{ height: 300, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '40%', left: 0, width: '100%', height: '100%' }}>
                        <div className="container">
                            <div className="mine-back-title mine-font-white">MyDeviceRepair</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="text-center mine-font-black font48 text-bold mt45">Contact</div>
                    <div className="mt-lg font18 mine-font-grey pt-lg">
                        If you have one of the following problems, please contact the store you have booked your device for repair with direct. The telephone number of the store can be found on your booking confirmation email.
                    </div>
                    <div className="mt45 font18 mine-font-grey text-bold">
                        My device has not been collected
                    </div>
                    <div className="mt-lg font18 mine-font-grey">
                        If the store is unable to rectify the problem please contact us
                    </div>
                    <div className="mt-lg font18 mine-font-grey">
                        Should you have any problems with your account or the service provided pleases check our FAQs but if you are unable to find the answer let us know the problem by submitting the details below or calling us.
                    </div>

                    <div className="mt45 font18 mine-font-grey pt-lg text-bold">
                        Telephone: 020 7041 8262
                    </div>
                    <div className="mt-lg font18 mine-font-grey mb45 text-bold pt-lg">
                        Email: info@mydevicerepair.co.uk
                    </div>
                </div>

            </div>
        );
    }

}


export default Contact;


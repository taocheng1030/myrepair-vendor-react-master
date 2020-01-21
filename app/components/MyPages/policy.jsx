import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';


class Policy extends React.Component {

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
                    <div className="text-center mine-font-black font48 text-bold mt45">Cookie Policy</div>

                    <div className="font18 text-bold mine-font-grey mt45">Privacy Statement:  How we use Cookies</div>

                    <div className="font18 mt-lg mine-font-grey">Cookies are very small text files that are stored on your computer when you visit some websites.</div>

                    <div className="font18 mt-lg mine-font-grey">We use cookies to help identify your computer so we can tailor your user experience, track shopping basket contents and remember where you are in the order process.</div>

                    <div className="font18 mt-lg mine-font-grey">You can disable any cookies already stored on your computer, but these may stop our website from functioning properly.</div>

                    <div className="font18 mt-lg mine-font-grey text-bold">The following is strictly necessary in the operation of our website.</div>

                    <div className="font18 mt-lg mine-font-grey">This Website Will:</div>
                    <ul className="font18 mt-lg mine-font-grey">
                        <li>Remember what is in your repair basket</li>
                        <li>Remember where you are in the repair booking process</li>
                        <li>Remember that you are logged in and that your session is secure.  You need to be logged in to complete your booking.</li>
                    </ul>
                    <div className="font18 mt-lg mine-font-grey">The following are not Strictly Necessary, but are required to provide you with the best user experience and also to tell us which pages you find most interesting (anonymously).</div>

                    <div className="font18 mt-lg mine-font-grey text-bold">Functional Cookies</div>

                    <div className="font18 mt-lg mine-font-grey">This Website Will:</div>
                    <ul><li>
                        <div className="font18 mt-lg mine-font-grey">Track the pages you visits via Google Analytics</div>
                    </li></ul>
                    <div className="font18 mt-lg mine-font-grey text-bold">Targeting Cookies</div>

                    <div className="font18 mt-lg mine-font-grey">This Website Will:</div>
                    <ul><li>
                        <div className="font18 mt-lg mine-font-grey">Allow you to share pages with social networks such as Facebook & Twitter</div>
                    </li></ul>
                    <div className="font18 mt-lg mine-font-grey text-bold">This website will not</div>
                    <ul><li>
                        <div className="font18 mt-lg mine-font-grey mb45">Share any personal information with third parties.</div>
                    </li></ul>
                </div>

            </div>
        );
    }

}


export default Policy;


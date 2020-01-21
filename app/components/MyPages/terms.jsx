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
                    <div className="mine-font-black font48 text-bold mt45">Terms & Conditions</div>

                    <div className="font18 text-bold mine-font-grey mt45">WEBSITE TERMS AND CONDITIONS for www.mydevicerepair.co.uk</div>

                    <div className="font18 mt-lg mine-font-grey">These terms of use govern your use of our site. These website terms of use have been provided and, approved by the solicitors at legal documents resource DIY Legals. Please read these terms in full before you use this Website. If you do not accept these terms of use, please do not use this Website.</div>

                    <div className="font18 mt-lg mine-font-grey">Your continued use of this site confirms your acceptance of these terms.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">WEBSITE ACCESS</div>

                    <div className="font18 mt-lg mine-font-grey">1.1 It is not necessary to register with us in order to use most parts of this Website. [However, particular areas of this Website will only be accessible only if you have registered.]</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">USE OF WEBSITE</div>

                    <div className="font18 mt-lg mine-font-grey">1.2 This Website may be used for your own private purposes and in accordance with these terms of use.</div>

                    <div className="font18 mt-lg mine-font-grey">1.3 You may print and download material from this Website provided that you do not modify or reproduce any content without our prior written consent.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">SITE UP-TIME</div>

                    <div className="font18 mt-lg mine-font-grey">1.4 All reasonable measures are taken by us to ensure that this Website is operational al day, every day. However, occasionally technical issues may result in some downtime and accordingly we will not be liable if this website is unavailable at any time.</div>

                    <div className="font18 mt-lg mine-font-grey">1.5 Where possible we always try to give advance warning of maintenance issues that may result in Website down time but we shall not be obliged to provide such notice.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">VISITOR PROVIDED MATERIAL</div>

                    <div className="font18 mt-lg mine-font-grey">1.6 Any material that a visitor to this Website sends or posts to this Website shall be considered non-proprietary and non confidential. We shall be entitled to copy, disclose, distribute or use for such other purpose as we deem appropriate all material provided to us, with the exception of personal information, the use of which is covered under our Privacy Policy [insert hyperlink here].</div>

                    <div className="font18 mt-lg mine-font-grey">1.7 When using this website you shall not post or send to or from this Website any material:</div>
                    <ul className="font18 mt-lg mine-font-grey">
                        <li>(a) for which you have not obtained all necessary consents;</li>
                        <li>(b) that is discriminatory, obscene, pornographic, defamatory, liable to incite racial hatred, in breach of confidentiality or privacy, which may cause annoyance or inconvenience to others, which encourages or constitutes conduct that would be deemed a criminal offence, give rise to a civil liability, or otherwise is contrary to the law in the United Kingdom;</li>
                        <li>(c) which is harmful in nature including, and without limitation, computer viruses, Trojan horses, corrupted data, or other potentially harmful software or data.</li>
                    </ul>
                    <div className="font18 mt-lg mine-font-grey">1.8 [We will fully co-operate with any law enforcement authorities or court order requiring us to disclose the identity or other details of any person posting material to this website in breach of Paragraph 1.7.]</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">LINKS TO AND FROM OTHER WEBSITES</div>

                    <div className="font18 mt-lg mine-font-grey">1.9 Throughout this Website you may find links to third party websites. The provision of a link to such a website does not mean that we endorse that website. If you visit any website via a link on this Website you do so at your own risk.</div>

                    <div className="font18 mt-lg mine-font-grey">1.10 Any party wishing to link to this website is entitled to do so provided that the conditions below are observed:</div>
                    <ul className="font18 mt-lg mine-font-grey">
                        <li>(a) you do not seek to imply that we are endorsing the services or products of another party unless this has been agreed with us in writing;</li>
                        <li>(b) you do not misrepresent your relationship with this website; and</li>
                        <li>(c) the website from which you link to this Website does not contain offensive or otherwise controversial content or, content that infringes any intellectual property rights or other rights of a third party.</li>
                    </ul>
                    <div className="font18 mt-lg mine-font-grey">1.11 By linking to this Website in breach of clause 5.2 you shall indemnify us for any loss or damage suffered to this Website as a result of such linking.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">DISCLAIMER</div>

                    <div className="font18 mt-lg mine-font-grey">1.12 Whilst we do take all reasonable steps to make sure that the information on this website is up to date and accurate at all times we do not guarantee that all material is accurate and ,or up to date.</div>

                    <div className="font18 mt-lg mine-font-grey">1.13 All material contained on this Website is provided without any or warranty of any kind. You use the material on this Website at your own discretion.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">EXCLUSION OF LIABILITY</div>
                    <div className="font18 mt-lg mine-font-grey">1.14 We do not accept liability for any loss or damage that you suffer as a result of using this Website.</div>

                    <div className="font18 mt-lg mine-font-grey">1.15 Nothing in these Terms of Use shall exclude or limit liability for death or personal injury caused by negligence which cannot be excluded or under the law of the United Kingdom.</div>

                    <div className="font18 text-bold mine-font-grey mt-lg">LAW and JURISDICTION</div>

                    <div className="font18 mt mine-font-grey">These terms of use are governed by English law. Any dispute arising in connection with these terms of use shall be subject to the exclusive jurisdiction of the Courts of England and Wales.</div>
                    <div className="font18 mt mine-font-grey">OUR DETAILS</div>
                    <div className="font18 mt mine-font-grey">Our business’s name is: EasyPc Repair Limited</div>
                    <div className="font18 mt mine-font-grey">Our business address is: Blachstump Cottage, Woodlands Road, Raydon, Ipswich, IP7 5QD</div>
                    <div className="font18 mt mine-font-grey mb45">Our contact details are: Tel: 08006891473 Email: info@easypc.repair</div>
                </div>

            </div>
        );
    }

}


export default Terms;


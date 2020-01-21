import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';


class FAQs extends React.Component {

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
                    <Row>
                        <Col md={10} mdOffset={1}>
                            <div className="mine-font-black font48 text-bold mt45">FAQs</div>
                            <div className="mine-font-primary font24 text-bold mt45">Customers:</div>
                            <ul className="mt-lg font16 mine-link-li" style={{color:'#008cba'}}>
                                <li>How do I pay for my booking?</li>
                                <li>How do I become a member?</li>
                                <li>Why would I want to use easypc.repair?</li>
                                <li>How does it work?</li>
                                <li>How long will it take to sign up?</li>
                                <li>How much will it cost me to become a member?</li>
                                <li>I can’t find the stores telephone number before I book, how can I get it?</li>
                                <li>Can I book my repair for a specific time and date?</li>
                                <li>What devices can you book for repair on the site?</li>
                                <li>Can I just search for the highest rated store in my area?</li>
                            </ul>
                            <div className="mine-font-primary font24 text-bold mt45">Popular Questions:</div>
                            <ul className="mt-lg font16" style={{color:'#008cba'}}>
                                <li>I need to cancel my booking! How can I do this?</li>
                                <li>How can I get a VAT Receipt?</li>
                                <li>I accidentally placed my order for drop off instead of collect – What can I do?</li>
                                <li>I haven’t received my confirmation email – Has my order been placed?</li>
                                <li>I booked a collection! Where are they?</li>
                                <li>Good or bad? Tell us about the service you received</li>
                                <li>I’ve just received my device and the problem is still there.</li>
                                <li>No stores appear when I search using my postcode?</li>
                                <li>Where can I find the stores address so I can drop it off?</li>
                                <li>How can I find the best stores?</li>
                                <li>Not sure how to leave a review?</li>
                                <li>How can I get in touch with EasyPc?</li>
                            </ul>
                            <div className="mine-font-primary font24 text-bold mt45">Vendors:</div>
                            <ul className="mt-lg font16" style={{color:'#008cba'}}>
                                <li>What are the benefits of joining EasyPc?</li>
                                <li>I need to join. Where can I sign up?</li>
                                <li>How long do I have to collect the device?</li>
                                <li>Can I refuse an order?</li>
                            </ul>


                            <div className="mine-font-primary font24 text-bold mt45">Customers:</div>
                            <div id="c1" className="mine-font-grey text-bold font18 mt-lg">How do I pay for my booking?</div>

                            <div className="mine-font-grey font16 mt-lg">Payment is very simple, you can pay cash on delivery/collection of your device. Card payments can be made to stores who offer the facility, this will be included on their profile page.</div>

                            <div className="mine-font-grey font16 mt-lg">Easypc.repair do not receive any payments directly from the customer.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How do I become a member?</div>

                            <div className="mine-font-grey font16 mt-lg">Click on the sign up for free tab in the top right corner of the page. If using a mobile device click the hamburger menu and select sign up.</div>

                            <div className="mine-font-grey font16 mt-lg">You can also become a member when making a booking for the first time and filling in your details on the form.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Why would I want to use mydevicerepair.co.uk</div>

                            <div className="mine-font-grey font16 mt-lg">There is no easier way to find a local repair store and book your device online. When you have selected a store you can choose the device you would like repaired at a convenient time and date. Lastly payment is made to the store directly once repaired so there’s no added cost.
                                Once you have used mydevicerepair.co.uk, you will receive offers and promotions via email and text. View all open and closed bookings on your account and make changes to existing bookings. You will also have the opportunity to leave feedback following a repair.
                            </div>
                            <div className="mine-font-grey text-bold font18 mt-lg">How does it work?</div>

                            <div className="mine-font-grey font16 mt-lg">Simply visit mydevicerepair.co.uk and enter your postcode, this will then be matched with local repair stores. You can then browse their repair list and see an estimated cost for your repair. Choose to drop your device to the store or have them pick it up select the date convenient for you sign in and confirm your order.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How long will it take to sign up?</div>

                            <div className="mine-font-grey font16 mt-lg">No more than a couple of minutes to enter your details and sign up for free.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How much will it cost me to become a member?</div>

                            <div className="mine-font-grey font16 mt-lg">Absolutely nothing!We want to make it easy for you to find local repair stores and the best price for your device repair with free membership for everyone.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I can’t find the stores telephone number before I book, how can I get it?</div>

                            <div className="mine-font-grey font16 mt-lg">We are unable to provide the stores telephone number until the order has been placed. The telephone number will be on your booking confirmation email once it has been accepted and can also be found on your accounts page.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Can I book my repair for a specific time and date?</div>

                            <div className="mine-font-grey font16 mt-lg">Of course! To book, just select the date and time you want to drop off or have your device picked up from our calendar. The store will confirm the exact time on your confirmation email once they have received the booking.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">What devices can you book for repair on the site?</div>

                            <div className="mine-font-grey font16 mt-lg">You will find stores repair most devices, with almost all supporting the following:</div>

                            <ul className="mt-lg font16">
                                <li>PC</li>
                                <li>Mac</li>
                                <li>Laptop</li>
                                <li>Mac Book</li>
                                <li>iPad</li>
                                <li>Tablet</li>
                                <li>iPhone</li>
                                <li>Smartphone</li>
                            </ul>
                            <div className="mine-font-grey font16 mt-lg">Just enter your postcode and see for yourself!</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Can I just search for the highest rated store in my area?</div>

                            <div className="mine-font-grey font16 mt-lg">Absolutely! Once you have entered your postcode, select the drop down list on the top of the store results and choose what you want to sort by. You can sort by distance or highest rating. On the right hand side you can filter by shop type and device.</div>

                            <div className="mine-font-primary font24 text-bold mt45">Popular Questions</div>
                            <div className="mine-font-grey text-bold font18 mt-lg">I need to cancel my booking! How can I do this?</div>

                            <div className="mine-font-grey font16 mt-lg">Just go to your account page select the bookings tab and click cancel under the booking. If you still need help contact us or the store ASAP!</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How can I get a VAT Receipt?</div>

                            <div className="mine-font-grey font16 mt-lg">VAT receipts are available if the store is VAT Registered – but some smaller stores might not be. You can contact the store and check once your device has been booked in.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I accidentally booked my device for drop off instead of collect – What can I do?</div>

                            <div className="mine-font-grey font16 mt-lg">Don’t worry – just give the shop a call and explain you want your device to be collected. The stores telephone number can be found on your confirmation email. Still having problems? Contact us</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I haven’t received my confirmation email – Has my booking been made?</div>

                            <div className="mine-font-grey font16 mt-lg">Don’t worry – there may just be a technical glitch, your booking has probably been made and there is just a delay in your confirmation email. To check this go to the “My Account” page and select “My Bookings” and check the order is placed. Still having problems? Contact us</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I booked a collection! Where are they?</div>

                            <div className="mine-font-grey font16 mt-lg">Stores on our site do everything they can to get to you on time. On busy days, like the weekends and evenings, it can take a bit longer.</div>

                            <div className="mine-font-grey font16 mt-lg">
                                The best thing to do is contact the store direct. Since they are collecting your device, they will know exactly where the technician is and why they have been delayed. You can find the stores number on your booking confirmation email.
                                Still having problems? Contact us
                            </div>
                            <div className="mine-font-grey text-bold font18 mt-lg">Good or bad? Tell us about the service you received</div>

                            <div className="mine-font-grey font16 mt-lg">There are hundreds of stores. How do you know which one to choose? That’s where reviews are very valuable. Reviews keep our stores on their toes and help you to find the best and cheapest repair store every time. If your device is fixed early, on time, dropped back with a smile or the store just went the extra mile to make you happy –share it with others! But if they are late, overly expensive or did not fix the problem, we need to know!</div>

                            <div className="mine-font-grey font16 mt-lg">So, after every rep  review! Just log in to your account, find the booking under the bookings tab and leave a review anytime. If there is a problem with our website drop us an email at help@mydevicerepair.co.uk so we can fix it.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I’ve just received my device and the problem is still there.</div>

                            <div className="mine-font-grey font16 mt-lg">Sometimes mistakes are made! If something needs fixing, you can:</div>
                            <ul className="mt-lg font16">
                                <li>Check your email confirmation to make sure your repair was listed</li>
                                <li>Call the store direct giving them the opportunity to rectify the problem</li>
                                <li>Otherwise, we’ll be happy to contact the store on your behalf to find out what has happened.</li>
                            </ul>
                            <div className="mine-font-grey text-bold font18 mt-lg">No stores appear when I search using my postcode?</div>

                            <div className="mine-font-grey font16 mt-lg">We hate to admit it, but that probably means there are no My Device Repair partnered stores in your area at the moment. Fortunately, you can help us fix this! Tell us about the repair stores in your area, just email info@easypc.repair to let us know about them. We will do the rest and soon will have repair stores close to you on mydevicerepair.co.uk.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Where can I find the stores address so I can drop it off?</div>

                            <div className="mine-font-grey font16 mt-lg">The stores address appears on your confirmation email and under the bookings tab on your accounts page.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How can I find the best stores?</div>

                            <div className="mine-font-grey font16 mt-lg">Reviews! Users recommend stores, letting you know what is good and bad. Once you have entered your postcode, you will see the stores have a star rating. The more stars, the better. When you have had your device repaired, leave a review! You can help the rest of My Device Repair users by letting them know which stores provide a good service. Reviews are the best way to ensure you get a great service.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Not sure how to leave a review?</div>

                            <div className="mine-font-grey font16 mt-lg">All you need to do is log into your My Device Repair Account, select bookings, find your last repair and select “Leave a Review”</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">How can I get in touch with My Device Repair?</div>

                            <div className="mine-font-grey font16 mt-lg">Whatever you need, just let us know – we have our team ready to help you out. Contact us</div>

                            <div className="mine-font-primary font24 text-bold mt45">Vendors</div>
                            <div className="mine-font-grey text-bold font18 mt-lg">What are the benefits of joining My Device Repair?</div>

                            <div className="mine-font-grey font16 mt-lg">My Device Repair is the UK’s only online booking repair service. Having an online presence increases the potential to gain more business from a greater number of customers in your local area – it’s that simple. We will get you online without any hassle – we list your services and process bookings.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">I need to join. Where can I sign up?</div>

                            <div className="mine-font-grey font16 mt-lg">Great! By putting your store online you will be getting more business from more customers in your local area – it is that simple.</div>

                            Sign up here

                            <div className="mine-font-grey text-bold font18 mt-lg">How long do I have to collect the device?</div>

                            <div className="mine-font-grey font16 mt-lg">Our customers can specify any time they would like their device picked up however, the shortest time period you have to pick up the device is 1 hour. If you should ever experience any problems meeting this deadline, we would encourage you to call the customer to let them know.</div>

                            <div className="mine-font-grey font16 mt-lg">If you are unable to reach the customer, get in touch with us and we will help.</div>

                            <div className="mine-font-grey text-bold font18 mt-lg">Can I refuse an order?</div>

                            <div className="mine-font-grey font16 mt-lg">Yes, however, why would you want to lose business and make a bad name for yourself? In exceptional circumstances such as inclement weather or having no collection driver, we do understand it might be physically impossible for you to collect. If however, you are too busy in the store, please consider contacting the customer and agreeing an alternative time. That way, you keep the business and a very happy customer!</div>
                            <div className="mine-font-grey font16 mt-lg mb45">
                                If need be please get in touch with us so we can inform the customer.
                        </div>
                        </Col>
                    </Row>
                </div>

            </div>
        );
    }

}


export default FAQs;


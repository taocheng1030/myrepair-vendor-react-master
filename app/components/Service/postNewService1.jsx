import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

const signupBackImage = require('../../img/mine/signup_back.png')

class PostNewService1 extends React.Component {

    constructor(props){
        super(props)
        this.state={
            showModal1: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }

    closeModal(){
        this.setState({showModal1:false})
    }

    renderModal(){
        return(
            <div>
                <Modal show={this.state.showModal1} onHide={this.closeModal.bind(this)}>
                    <div className="flex-center-center" style={{ flexDirection: 'column', padding: 30 }}>
                        <div className="font22 mine-font-grey mt">Quit Posting New Service?</div>
                        <div className="mt-lg">
                            <span className="font14 mine-font-grey">All info will be lost.</span>
                        </div>
                        <div className="flex-center-center mt45">
                            <div className="mine-normal-button flex-center-center">Cancel</div>
                            <div style={{ width: 30 }} />
                            <div className="mine-normal-danger-button flex-center-center">Quit</div>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }

    render() {
        return (
            <div className="mine-back-white mine-border-bottom mt76" >
                <div style={{ position: 'relative' }}>
                    <Image src="img/mine/service_post.png" style={{ height: 800, width: '100%', objectFit: 'none' }} />
                    <div style={{ position: 'absolute', top: '50%', left: 0, width: '100%', height: '100%' }}>
                        <Row>
                            <Col sm={8} smOffset={2}>
                                <div className="mine-back-title">Post New Service</div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="container mt45">
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <Image src="img/mine/brush.png" className="mr-lg" />
                        <div style={{ position: 'relative', width: '100%' }}>
                            <span className="mine-normal-text mine-vertical-bottom">Household Chores</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }} className="mt45">
                        <span className="font24 mine-font-success text-bold">
                            <em className="font18 icon-arrow-left mr30 pr" />
                            Describe<Image src="img/mine/dot_line.png" className="mr ml" />
                            Price<Image src="img/mine/dot_line.png" className="mr ml" />
                            Time Slot<Image src="img/mine/dot_line.png" className="mr ml" />
                            Address
                        <em className="font18 icon-arrow-right ml30 pl" />
                        </span>

                    </div>
                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Give your service a short title.
                    </div>
                        <FormControl type="text" placeholder="Optional" className="form-control mine-input-bottom-border" />
                    </div>

                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Describer your service
                    </div>
                        <FormControl type="text" placeholder="eg. I have 10 years experience" className="form-control mine-input-bottom-border" />
                    </div>
                    <div>
                        <div className="font18 mine-font-grey text-bold mb-lg mt45">
                            Add tags to your service(optional)
                    </div>
                        <FormControl type="text" placeholder="separate tags by comma" className="form-control mine-input-bottom-border" />
                    </div>

                    <div className="mt-lg pt-lg">
                        <Button bsClass="mine-success-outline-button  btn btn-oval btn-success btn-outline width270 pl35">
                            <Image src="img/mine/camera_icon.png" className="pull-left" />Add Photos(Optional)</Button>
                    </div>
                    <div className="flex-left mt-lg pt-lg">
                        <div className="mine-image-270"><Image className="mine-image-close" src="img/mine/success_close.png" /></div>
                        <div className="mine-image-270 ml"><Image className="mine-image-close" src="img/mine/success_close.png" /></div>
                    </div>

                    <Button bsClass="mine-default-button btn btn-oval btn-default width270 mt-lg"
                        onClick={()=>this.setState({showModal1:true})}>Next</Button>
                </div>
                <div style={{ height: 60 }} />
                {this.renderModal()}
            </div>
        );
    }

};


export default PostNewService1;


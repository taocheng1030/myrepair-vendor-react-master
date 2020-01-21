import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image, Modal } from 'react-bootstrap';

const { compose, withProps, withStateHandlers } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");


const MapWithAMarker = compose(
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={props.center}

    >
        {props.address && props.address.map((item, index) => {
            if (!props.visible[index]) return null
            let direction = ['red_n_1.png', 'red_ne_1.png', 'red_e_1.png', 'red_se_1.png', 'red_s_1.png', 'red_sw_1.png', 'red_w_1.png', 'red_nw_1.png']
            let dir = 0
            if (item.direction < 22.5 || item.direction > 337.5) dir = 0
            if (item.direction >= 22.5 && item.direction < 67.5) dir = 1
            if (item.direction >= 67.5 && item.direction < 112.5) dir = 2
            if (item.direction >= 112.5 && item.direction < 157.5) dir = 3
            if (item.direction >= 157.5 && item.direction < 202.5) dir = 4
            if (item.direction >= 202.5 && item.direction < 247.5) dir = 5
            if (item.direction >= 247.5 && item.direction < 292.5) dir = 6
            if (item.direction >= 292.5 && item.direction < 337.5) dir = 7


            return (
                <Marker key={index}
                    icon={{ url: 'http://static.gpsoo.net/v3/home/car/png/' + direction[dir], scaledSize: new google.maps.Size(32, 32) }}
                    position={{ lat: item.latitude, lng: item.longitude }}
                    onClick={() => props.onToggleOpen(index)}
                >
                    {props.isOpen[index] && <InfoWindow onCloseClick={() => props.onToggleOpen(index)} >
                        <div>
                            <p>{item.name}</p>
                            <p>Position: {item.latitude + ',' + item.longitude}</p>
                            <p>Speed: {item.speed}km/h</p>
                        </div>
                    </InfoWindow>}
                </Marker>
            )
        })}
    </GoogleMap>
);

export default class JacksMapView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0,
            address: [],
            isOpen: []
        }
       this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.center = {
            lat: 22,
            lng: 110
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight-200 });
    }

    componentDidMount() {
        //this.init([{latitude:39, longitude:121}])
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillReceiveProps(nextProps) {

        //if (this.props.address != nextProps.address) {
        //this.init(nextProps.address)
        //}
        //nextProps.address && this.setState({address: [...nextProps.address]})
    }
    onToggleOpen(index) {
        this.setState((old) => {
            old.isOpen[index] = !old.isOpen[index]
        })
    }
    render() {

        return (
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.state.height }} />}
                mapElement={<div style={{ height: `100%` }} />}
                address={this.props.address}
                visible={this.props.visible}
                center={this.center}
                isOpen={this.state.isOpen}
                onToggleOpen={this.onToggleOpen.bind(this)}

            />
            // <div id="map-view" style={{ width: this.state.width, height: this.state.height }} />
        )
    }
}

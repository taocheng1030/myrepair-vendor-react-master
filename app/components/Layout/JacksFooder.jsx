import React from 'react';
import pubsub from 'pubsub-js';
import HeaderRun from './Header.run'
import { NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Router, Route, Link, History } from 'react-router-dom';


class JacksFooter extends React.Component {

    render() {
        return (
            <footer>
                <div style={{height:100, width:'100%', backgroundColor:'red'}}/>
            </footer>
            );
    }

}

export default JacksFooter;

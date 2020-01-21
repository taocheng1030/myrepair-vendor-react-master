import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';

const icon_client = require('../../img/mine/icon_client.png')
const icon_member = require('../../img/mine/icon_member.png')
const icon_provider = require('../../img/mine/icon_provider.png')

const avatar_image = require('../../img/mine/avatar1.png')

class AppHeader extends React.Component {

    constructor(props){
        super(props)
        
        this.state={
            titles: props.titles || [],
            links: props.links || [],
            cur: props.cur || props.titles[0],
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {

    }
    render() {
        return (
            <div className="mt76" style={{width:'100%', height:50, backgroundColor:'#f1651333', display:'flex', alignItems:'center'}}>
                {
                    this.state.titles.map((item, index)=>{
                        return (
                            <Link to={this.state.links[index]} key={index} className={this.state.cur==item?"subHeaderItem item-selected":"subHeaderItem"}>{item}</Link>
                        )
                    })
                }
            </div>
        );
    }

}


export default AppHeader;


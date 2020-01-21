import React from 'react';
import ReactDom from 'react-dom';
import ContentWrapper from '../Layout/ContentWrapper';
import { Router, Route, Link, History } from 'react-router-dom';
import { Grid, Row, Col, Dropdown, MenuItem, Button, FormControl, Image } from 'react-bootstrap';


class AppHeader extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
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
            <div style={{ width: '100%', backgroundColor: '#f1651333' }}>
                <div className="container" style={{alignItems:'center', zIndex:1001}}>
                    {
                        this.state.titles.map((item, index) => {
                            return (
                                <Link to={this.state.links[index]} key={index} 
                                    className={this.state.cur == item ? "subHeaderItem item-selected" : "subHeaderItem"} style={{display:'inline-block'}}>
                                    <div style={{display:'inline-block', paddingTop:8, paddingBottom:8}}>{item}</div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        );
    }

}


export default AppHeader;


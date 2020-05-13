import React from 'react';
//import '../css/style.css';
import PropTypes from 'prop-types';


export default class Header extends React.Component{
    static propTypes= {
        tagline: PropTypes.string,
    }

    render(){
        return <header className="top">
            <h1>BECS
                <span className="ofThe">
                    <span className="of"></span> 
                    <span className="the"></span>
                </span>
            </h1>
            <h3 className="tagline">
                <span>{this.props.tagline}</span>
            </h3>
        </header>
    }
}
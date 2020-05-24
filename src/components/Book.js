import React from 'react';
import Proptypes from 'prop-types';

export default class Books extends React.Component{

    render(){
        console.log(this.props.details);
        const {imageSrc, price, title, stock, author}= this.props.details;
        return (
            <li className= 'menu-book'>

            </li>
        );
    }
}
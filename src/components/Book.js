import React from 'react';
import {formatPrice} from '../helpers.js';
import Proptypes from 'prop-types';

export default class Books extends React.Component{

    handleClick= (event) => {
        this.props.addToOrder(this.props.details.barcode);
    }

    render(){
        const {imageSrc, price, title, stock, author}= this.props.details;
        const isAvailable = stock === '0';
        return (
            <li className= 'menu-book'>
                <img src= {imageSrc} alt= {title}/>
                <h3 className= 'book-name'>
                    {title}
                    <span className= 'price'>{formatPrice(price)}</span>
                </h3>
                <p>by {author}</p>
                <button disabled={isAvailable} onClick={this.handleClick}>{!isAvailable ? "Add To Order" : "Sold Out!"}</button>
            </li>
        );
    }
}
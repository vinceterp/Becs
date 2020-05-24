import React from 'react';
import Proptypes from 'prop-types';

export default class Books extends React.Component{

    handleClick= (event) => {
        //this.props.addToOrder(this.props.details.barcode);
        window.alert('Not fully implemented');
    }

    render(){
        console.log(this.props.details);
        const {imageSrc, price, title, stock, author}= this.props.details;
        const isAvailable = stock === '0';
        return (
            <li className= 'menu-book'>
                <img src= {imageSrc} alt= {title}/>
                <h3 className= 'book-name'>
                    {title}
                    <span className= 'price'>{price}</span>
                </h3>
                <p>by {author}</p>
                <button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? "Add To Order" : "Sold Out!"}</button>
            </li>
        );
    }
}
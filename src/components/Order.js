import React from 'react';
import {formatPrice} from '../helpers.js';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

export default class Order extends React.Component{

    state= {
        activePromo: false,
    }

    static propTypes= {
        books: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func,
    }
   
    renderOrders = (orderId) => {
        const book= this.props.books[orderId];
        const count= this.props.order[orderId];
        const isAvailable= book && book.stock !== '0';
        if (!isAvailable){
            return null;
        }
        const subtotal= formatPrice(count * book.price);
        return (
            <CSSTransition classNames= 'order' key= {orderId} timeout={{enter: 500, exit: 500}}>
                <li key={orderId}>
                    <span>
                        <TransitionGroup component= 'span' className= 'count'>
                            <CSSTransition classNames= 'count' key={count} timeout= {{enter: 1000, exit: 1000}}>
                                <span><strong>{count} </strong></span> 
                            </CSSTransition>
                        </TransitionGroup>
                        {book.title} = {subtotal}
                        <button onClick= {()=> this.props.removeFromOrder(orderId)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        )
    }

    orderTotal= (prevTotal, key) => {
        const book = this.props.books[key];
        const count= this.props.order[key];
        const isAvailable= book && book.stock !== '0';
        if (isAvailable){
            return prevTotal + (count * book.price);
        }
        return prevTotal;
    }

    handlePromoCodeChange = (event) => {
        const inputCode= event.target.value.toUpperCase();

        const book= Object.values(this.props.books).find(element => element.promoCode.toUpperCase() === inputCode);
        if (book){
            console.log(book ? book.promoPrice : "No promotion @ price ");
            book.price = book.promoPrice;
            console.log(book);
            console.log(this.props.books);
            this.setState({activePromo: true});
        }
        this.forceUpdate();
        //return book ? book.price = book.promoPrice: null;
    }
    
    render(){
        const orderIds= Object.keys(this.props.order);
        const total= orderIds.reduce(this.orderTotal, 0);

        return (
            <div className= "order-wrap">
                <h2>Order</h2>
                <TransitionGroup component='ul' className='order'>{orderIds.map(this.renderOrders)} </TransitionGroup>
                <input placeholder= "Promo Code" defaultValue= "" className= 'promo_code' type= "text" onChange= {this.handlePromoCodeChange}/>
                <div className= 'total'>
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>)
    }
}
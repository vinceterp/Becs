import React from 'react';
import '../CSS/App.css';
<<<<<<< HEAD
import * as sampleBooks from '../sample-books.js';
import Header from './Header.js';
import Book from './Book.js';
=======
import books from '../sample-books.js';
>>>>>>> bc01be8a4b88a16d807e8ea1c53a8520dfd853d8

export default class App extends React.Component {

    state = {
        books: sampleBooks,
    }

    render(){
        return (
            <div className="menu--container">
<<<<<<< HEAD
                {/* {console.log(Object.keys(this.state.books.default))} */}
                <div className= 'book-list'>
                    <Header tagline= {'Book E-Commerce System'} />
                    <ul className= 'books'>
                        {Object.keys(this.state.books.default).map((key)=>{return <Book /*addToOrder= {this.addToOrder}*/ details= {this.state.books.default[key]} index={key} key={key}/>})}
                    </ul>
                </div>
                <div className= 'order-list-container'>

                </div>
                <div className= 'inventory'>

                </div>
=======
                {console.log(this.state.sampleBooks)}
                <p>Hi, I'm a placeholder</p>
>>>>>>> bc01be8a4b88a16d807e8ea1c53a8520dfd853d8
            </div>
        )
    }
}
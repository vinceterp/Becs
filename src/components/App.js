import React from 'react';
import '../CSS/App.css';
import * as sampleBooks from '../sample-books.js';
import Header from './Header.js';
import Book from './Book.js';

export default class App extends React.Component {

    state = {
        books: sampleBooks,
    }

    loadSampleBooks = () => {
        this.setState({books: sampleBooks});
    }

    render(){
        return (
            <div className="menu--container">
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
            </div>
        )
    }
}
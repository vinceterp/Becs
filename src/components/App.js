import React from 'react';
import '../CSS/App.css';
import * as sampleBooks from '../sample-books.js';
import Header from './Header.js';
import Book from './Book.js';
import base from '../base.js';
import Inventory from './Inventory.js';
import Order from './Order.js';

export default class App extends React.Component {

    state = {
        books: {},
        order: {},
    }

    loadSampleBooks = () => {
        this.setState({books: sampleBooks.default});
    }

    addBookToState= (book) => {
        const newBooks= {...this.state.books};
        newBooks[book.barcode]= book;
        this.setState({books: newBooks});
    }

    addToOrder = (barcode) => {
        const order= {...this.state.order};
        order[barcode]= order[barcode] + 1 || 1;
        this.setState({order});
    }

    removeFromOrder= (barcode) => {
        const order= {...this.state.order};
        delete order[barcode];
        this.setState({order: order});
    }

    updateBook = (barcode, updatedBook) => {
        const books= {...this.state.books};
        if (books[barcode]) books[barcode] = updatedBook;
        this.setState({books: books});
    }

    deleteBook = (barcode) => {
        const books= {...this.state.books};
        //console.log(books[`${barcode}`]);
        books[`${barcode}`] = null;
        //books.barcode= null;
        this.setState({books});
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentDidMount(){
        //connecting to firebase
        //this.ref= base.syncState('/books', {context: this, state: 'books'});

    }

    render(){
        return (
            <div className="menu--container">
                {/* {console.log(Object.keys(this.state.books.default))} */}
                <div className= 'book-list'>
                    <Header tagline= {'Book E-Commerce System'} />
                    <ul className= 'books'>
                        {Object.keys(this.state.books).map((key)=>{return <Book addToOrder= {this.addToOrder} details= {this.state.books[key]} index={key} key={key}/>})}
                    </ul>
                </div>
                <Order removeFromOrder= {this.removeFromOrder} books={this.state.books} order={this.state.order}/>
                <Inventory deleteBook= {this.deleteBook} updateBook= {this.updateBook} books= {this.state.books} addBookToState={this.addBookToState} loadSamples={this.loadSampleBooks}/>
            </div>
        )
    }
}
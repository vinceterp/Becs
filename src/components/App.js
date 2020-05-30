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
        console.log(!this.setState({order}));
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
        const newBooks= {...this.state.books};

        //For future reference, do not use books[barcode]= null because it will result in a null pointer exception in the books object when a Book tries to render
        //React will stil try to load the null book state object
        //Unless place in books state object is non-existent
        delete newBooks[barcode];
      
        this.setState({books: newBooks});
    }

    componentDidUpdate(){
        
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentDidMount(){
        //connecting to firebase
        this.ref= base.syncState('/books', {context: this, state: 'books'});
        return this.ref;
    }

    render(){
        return (
            <div className="menu--container">
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
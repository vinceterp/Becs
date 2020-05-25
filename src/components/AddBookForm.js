import React from 'react';
import PropTypes from 'prop-types';
import Book from '../prototypes/Book.js'

export default class AddBookForm extends React.Component{
    static propTypes= {
        addBook: PropTypes.func,
    }

    titleRef = React.createRef();    
    authorRef= React.createRef();
    imageRef = React.createRef();
    priceRef = React.createRef();
    stockRef = React.createRef();

    createBook = (event) =>{
        event.preventDefault();

        const book= new Book(this.titleRef.current.value, this.authorRef.current.value, `${Date.now()}`, this.imageRef.current.value, parseFloat(this.priceRef.current.value), false, 0, this.stockRef.current.value);
        
        this.props.addBook(book);
        event.currentTarget.reset();
    }
    
    render(){
        return (<form className= 'book-edit' onSubmit={this.createBook}>
                    <input name="title" type="text" ref= {this.titleRef} placeholder="Title"/>
                    <input name="author" type="text" ref= {this.authorRef} placeholder= "Author"/>
                    <input name="image" type= "text" ref={this.imageRef} placeholder= "Image"/>
                    <input name="price" type= "text" defaultValue= "0" ref= {this.priceRef} placeholder="Price"/>
                    <input name="stock" type= "number" min= {0} ref={this.stockRef} defaultValue= {1} placeholder="Stock"/>
                    <button type="submit">+ Add Book</button>
                </form>);
    }
}
import React from 'react';
import PropTypes from 'prop-types';

export default class EditBookForm extends React.Component{

    static propTypes= {
        bookDetails: PropTypes.array,
        updateBook: PropTypes.func,
        deleteBook: PropTypes.func,
    }

    handleChange = (event) => {
        const book= this.props.bookDetails[1];
        const value= event.currentTarget.value;
        const name= event.currentTarget.name;    
        book[name]= value;
        this.props.updateBook(book.barcode, book);
    }

    render(){
        const book= this.props.bookDetails[1];
        return (
            <React.Fragment>
                <div className= 'book-edit'>
                    <input name="title" type="text" defaultValue= {book.title} onChange= {this.handleChange}/>
                    <input name="author" type="text" defaultValue= {book.author} onChange= {this.handleChange}/>
                    <input name="image" type= "text" defaultValue= {book.imageSrc} onChange= {this.handleChange}/>
                    <input name="price" type= "text" defaultValue= {book.price} onChange= {this.handleChange}/>
                    <input name="stock" type= "number" min= "0" defaultValue= {book.stock} onChange= {this.handleChange}/>
                    <button name= 'delete' onClick={() => this.props.deleteBook(book.barcode)}>Delete Book</button>
                </div>
            </React.Fragment>
            )
    }
}
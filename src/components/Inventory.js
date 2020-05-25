import React from 'react';
import AddBookForm from './AddBookForm.js';
import EditBookForm from './EditBookForm.js';
import PropTypes from 'prop-types';
//import Login from './Login.js';
//import base, {firebaseApp} from '../base.js';
//import firebase from 'firebase';


export default class Inventory extends React.Component{

    state= {
        uid: true,
    }

    logout= async () => {
        //await firebase.auth().signOut();
        this.setState({uid: null});
    }

    render(){
        const button= <div><button className='book-edit' onClick={this.logout}>SignOut</button></div>

        // if (!this.state.uid){
        //     return <Login authenticate={this.authenticate}/>
        // }
        
        return <div className= "Inventory">Inventory
                    <AddBookForm addBook={this.props.addBookToState}/>
                    <button className= "book-edit" onClick={this.props.loadSamples}>Load Sample Books</button>
                    {button}
                    {Object.entries(this.props.books).map((book)=> { return <EditBookForm key= {book.barcode} deleteBook= {this.props.deleteBook} updateBook= {this.props.updateBook} bookDetails= {book}/>})}
                    {button}
                </div>
    }

}
import React from 'react';
import AddBookForm from './AddBookForm.js';
import EditBookForm from './EditBookForm.js';
import PropTypes from 'prop-types';
import Login from './Login.js';
import base, {firebaseApp} from '../base.js';
import firebase from 'firebase';

export default class Inventory extends React.Component{

    static propTypes= {
        books: PropTypes.object,
        deleteBook: PropTypes.func,
        updateBook: PropTypes.func,
        loadSamples: PropTypes.func,
    }

    state= {
        uid: null,
        owner: null,
    }

    authHandler = async authData=> {
        if (!authData) return;
        const books= await base.fetch('books', {context: this});
        console.log(books);
        
        if (!books.owner){
            await base.post(`/owner`, {data: authData.user.uid||authData.uid});
            this.setState({uid: authData.user.uid || authData.uid, owner: books.owner || authData.user.uid || authData.uid});
        }
        this.setState({uid: authData.user.uid || authData.uid});
    }

    logout= async () => {
        await firebase.auth().signOut();
        this.setState({uid: null});
    }

    authenticate= async (provider) => {
        const authProvider= new firebase.auth[`${provider}AuthProvider`]();
        await firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    }

    componentDidMount () {
        firebase.auth().onAuthStateChanged((user) => {if (user){
            const helper={user: user};
            this.authHandler(helper);
        }});
    }

    render(){
        const button= <div><button className='book-edit' onClick={this.logout}>SignOut</button></div>

        if (!this.state.uid){
            return <Login authenticate={this.authenticate}/>
        }
       
        return <div className= "Inventory">Inventory
                    <AddBookForm addBook={this.props.addBookToState}/>
                    <button className= "book-edit" onClick={this.props.loadSamples}>Load Sample Books</button>
                    {button}
                    {Object.entries(this.props.books).map((book)=> {return <EditBookForm key= {book.barcode} deleteBook= {this.props.deleteBook} updateBook= {this.props.updateBook} bookDetails= {book}/>})}
                    {button}
                </div>
    }
}
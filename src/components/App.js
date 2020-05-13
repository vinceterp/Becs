import React from 'react';
import '../CSS/App.css';
import books from '../sample-books.js';
import Header from './Header.js';

export default class App extends React.Component {

    state = {
        sampleBooks: books,
    }

    render(){
        return (
            <div className="menu--container">
                {console.log(this.state.sampleBooks)}
                <div className= 'book-list'>
                    
                    <Header tagline= {'Book E-Commerce System'} />
                </div>
                <div className= 'order-wrapper'>

                </div>
                <div className= 'inventory'>

                </div>
            </div>
        )
    }

}

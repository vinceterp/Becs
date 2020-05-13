import React from 'react';
import '../CSS/App.css';
import books from '../sample-books.js';

export default class App extends React.Component {

    state = {
        sampleBooks: books,
    }

    render(){
        return (
            <div className="menu--container">
                {console.log(this.state.sampleBooks)}
                <p>Hi, I'm a placeholder</p>
            </div>
        )
    }

}

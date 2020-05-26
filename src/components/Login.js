import React from 'react';

const Login = (props) =>{
    return(
        <nav className='login'>
            <h2>Inventory Login</h2>
            <p>SIgn in to manage your store's Inventory</p>
            <button className= 'github' onClick= {()=>{props.authenticate('Github')}}>Login w/ GitHub</button>
        </nav>
    )
}

export default Login;
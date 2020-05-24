import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import App from './App.js';
import NotFound from './NotFound';

const Router= function (){
    return <BrowserRouter>
                <Switch>
                    <Route exact path= "/" component= {App}/>
                    <Route component= {NotFound}/>
                </Switch>
            </BrowserRouter>
}

export default Router;
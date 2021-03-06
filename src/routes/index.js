import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Purchase from '../pages/Purchase';
import Client from '../pages/Client';
import Item from '../pages/Item';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            <Route path="/" exact component={Home}/>
                <Route path="/pedido" exact component={Purchase}/>
                <Route path="/cliente" exact component={Client}/>
                <Route path="/item" exact component={Item}/>
            </Switch>
        </BrowserRouter>
    );
}
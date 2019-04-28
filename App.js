import React, {Component} from 'react';
import {Route} from "react-router-dom";
import Counter from "./Components/Counter";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
                <Route path="/"  component={Counter} />
    </Router>
);
export default App;

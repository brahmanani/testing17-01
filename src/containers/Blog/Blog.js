import React, { Component } from 'react';
import Section from '../../Components/Home/Home';
import About from '../../Components/About/About';
import {Route,NavLink} from 'react-router-dom';
import Toolbar from '../../Components/Header/Toolbar';

class Blog extends Component{
    render(){
        return(
            <div>
                <Toolbar/>
            {/* <Route path="/" exact render={() =><h1>Home</h1>}/> */}
            <Route path="/" exact component={Section} />
            <Route path="/about" component={About} />
        </div>
        )
    }
}

export default Blog;
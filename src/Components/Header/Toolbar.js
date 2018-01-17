import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Toolbar.css';

class Toolbar extends Component {
    render(){
        return(
            <header className="App-header">
            <nav>
              <ul>
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to={{
                    pathname: '/about',
                    hash:'#submit',
                    search:'?#submit=true'
                }}>About</NavLink></li>
              </ul>
            </nav>
          </header>
        )
    }
}
export default Toolbar;
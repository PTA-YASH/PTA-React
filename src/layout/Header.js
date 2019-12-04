import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            
            <a class="navbar-brand" href="#">YashTech</a>
            
            
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">User</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trainer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Exam</a>
              </li>
            </ul>
          </nav>
          
        );
    }
}

export default Header;
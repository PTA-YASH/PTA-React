import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Store';
import Login from './components/Login';
import Technology from './components/Technology';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';



function App() {
  return (
    <Provider store={store}>
    <Router>
      <div >
        <Header/>
         {/* <Login/>  */}
         <Technology/> 
       </div>

    </Router>
    </Provider>
   
  );
}

export default App;

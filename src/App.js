import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './components/login/Login';
import  { MainView } from './components/mainView/MainView';

export default class App extends React.Component {

  constructor(props) {
      super(props);

      const LoginView = () => (
          <Login handleSignIn = {this.handleSignIn}/>
      );
    
      const Main = () => (
          <MainView />
      );

      this.state = {isLoggedIn : false, loginView : LoginView, main : Main}
      this.handleSignIn = this.handleSignIn.bind(this);
      localStorage.setItem('email', "natalia@email.com");
      localStorage.setItem('name', "Natalia Palacios");
      localStorage.setItem('password', "1234");
      if(!localStorage.getItem("isLoggedIn")) {
          localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
      }
  }

  handleSignIn() {
      this.setState({isLoggedIn:true})
  }

  render() {

      const LoginView = this.state.loginView;
      const Main = this.state.main;

      const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true");
      let choose;

      if(isLoggedIn){
          choose = (
              <div>
                  <ul>
                      <li><Link to="/Main">Main</Link></li>
                  </ul>
                  <div>
                      <Route path="/Main" component={Main}/>
                  </div>
              </div>
          );
      } else {
          choose = (
              <div>
                  <ul>
                      <li><Link to="/">Login</Link></li>
                  </ul>
                  <div>
                      <Route exact path="/" component={LoginView}/>
                  </div>
              </div>
          );
      }

      return (
          <Router>
              <div className="App">
                  {choose}
              </div>
          </Router>
      );

  }

}
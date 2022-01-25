import logo from './logo.svg';
import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {  
    nameUser:"",
    emailUser:"",
    passwordUser:""
  }  
  handleonChange  = (e) => {

const input_name = e.target.name;  
const value = e.target.value; 
this.setState({
[input_name]:value,

  

})
  };
  render() { 
    return (
    <div>
      <form>
      <input type="text" placeholder='name' value={this.state.nameUser}  name ='nameUser' onChange = {this.handleonChange}/>
      <input type="email" placeholder='email'value={this.state.emailUser}  name ='emailUser'onChange = {this.handleonChange}/>
      <input type="password" placeholder='password' value={this.state.passwordUser} name ='passwordUser' onChange = {this.handleonChange}/>
      <button className='login'>LOg In</button>
      <div>
        <input type="checkbox" name = "age" />
        <label htmlFor="scales">Mam ukończone 18 lat</label>
      </div>
      </form>
    </div>
    
   
    );
  }
}
 
export default App;
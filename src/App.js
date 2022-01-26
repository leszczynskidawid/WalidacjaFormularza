import logo from './logo.svg';
import React, { Component } from 'react';
import ErrorsMessagesComponents from './ErrorsMessagesComponent';

import './App.css';

class App extends Component {
  state = {  
    nameUser:"",
    emailUser:"",
    passwordUser:"",
    checkBoxAccept: false,

    errors: {
      nameUser_error_status:false,
      emailUser_error_status: false,
      passwordUser_error_status:false,
      checkBoxAccept_error_status: false,
    }
  }  

  messagesErrors ={
    incorect_inputName_massage: "Wartość musi zawierać > 10 znakow", 
    incorect_inputEmail_massage: "Email musi zawierać znak @",
    incorect_inputPassword_massage:"Hasło nie może być < 6 znakow",
    incorect_checboxAccept_massage:"prosze potiwrdzić pełnoletność ",
  }
//witam kolego mam pytanie ?? czemu przy spełnieniu wszystkich warunku walidacji nie zostaje resetowany error z ostatniego 
//wypełnionego inputa. 
  handleOnClickSendForm  = (e) => {
    const validateInput = this.handleValidateInputn(); 
    console.log(validateInput)
     e.preventDefault();
     if(validateInput.correctAllInputs)
     {
       this.setState({
        nameUser:"",
        emailUser:"",
        passwordUser:"",
        checkBoxAccept: false,
       })
       console.log("posżło")
     }
     else {
      this.setState({
        errors:{
          nameUser_error_status:!validateInput.inputName,
          emailUser_error_status: !validateInput.inputEmail,
          passwordUser_error_status:!validateInput.inputPassword,
          checkBoxAccept_error_status: !validateInput.inputCheckbox,
        }
       }) 
       console.log("nieeeeeee")
     }
    
     
  };
  handleValidateInputn  = () => {

   
    let inputName = false; 
    let inputEmail= false; 
    let inputPassword= false;
    let inputCheckbox= false; 
    let correctAllInputs= false; 
    const {nameUser, emailUser, passwordUser, checkBoxAccept} = this.state;


    if(nameUser.length > 3 && nameUser.indexOf(" ")===-1)
    {
      inputName = true;  
    }
    if(emailUser.indexOf("@")!==-1)
    {
      inputEmail = true
    }
    if(passwordUser.length > 8)
    {
      inputPassword = true
    }
    if(checkBoxAccept)
    {
      inputCheckbox = true;
    }
    if(inputName && inputEmail && inputPassword && inputCheckbox)
    {
      correctAllInputs = true
    }

     return ({
      inputName,
      inputEmail,
      inputPassword,
      inputCheckbox,
      correctAllInputs

     })
  };
  handleonChange  = (e) => {

    const inputName = e.target.name;  
    const inputValue = e.target.value; 
    const inputType = e.target.type;
     if(inputType=== "text" ||inputType === "email" || inputType === "password" )
     {
     
      this.setState({
        [inputName]:inputValue,
        })
     }
     else if(inputType === "checkbox")
     {
       this.setState({
         [inputName]: e.target.checked
       })
     }



  };
  render() { 

    const {nameUser, emailUser, passwordUser,checkBoxAccept} = this.state; 
    const {nameUser_error_status, emailUser_error_status,passwordUser_error_status, checkBoxAccept_error_status} = this.state.errors;
    const {incorect_inputName_massage, incorect_inputEmail_massage, incorect_inputPassword_massage, incorect_checboxAccept_massage} = this.messagesErrors; 
    return (
    <div>
      <form>
      <input type="text" placeholder='name' value={nameUser}  name ='nameUser' onChange = {this.handleonChange}/>
      {<ErrorsMessagesComponents errorStatus = {nameUser_error_status} incorrectMessage ={incorect_inputName_massage}/>}

      <input type="email" placeholder='email'value={emailUser}  name ='emailUser'onChange = {this.handleonChange}/>
      {<ErrorsMessagesComponents errorStatus = {emailUser_error_status}incorrectMessage ={incorect_inputEmail_massage} />}

      <input type="password" placeholder='password' value={passwordUser} name ='passwordUser' onChange = {this.handleonChange}/>
      {<ErrorsMessagesComponents errorStatus = {passwordUser_error_status} incorrectMessage ={incorect_inputPassword_massage}/>}

      <button onClick ={this.handleOnClickSendForm} className='login'>LOg In</button>

      <div>
        <input type="checkbox" name = "checkBoxAccept"type="checkbox" onChange = {this.handleonChange} checked = {checkBoxAccept}/>
        {<ErrorsMessagesComponents errorStatus = {checkBoxAccept_error_status} incorrectMessage ={incorect_checboxAccept_massage}/>}
        <label htmlFor="scales">Mam ukończone 18 lat</label>
      </div>
      </form>
    </div>
    
   
    );
  }
}
 
export default App;
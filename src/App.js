import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        emailValue: '',
        pwValue: '',
        pwConfirmationValue: ''
      }
    };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(propertyName, event) {
    const form = this.state.form;
    form[propertyName] = event.target.value;
    this.setState({
      form: form
    })

  }

  handleSubmit(event) {
// validation goes here
    let re = new RegExp(/.+@.+\.com/, 'i')

    if (this.state.form.pwValue === this.state.form.pwConfirmationValue && re.test(this.state.form.emailValue)){
      alert("success!")
    } else {

      console.log(document.querySelectorAll(".passwords"))
      var passwords = document.querySelectorAll(".passwords")


      passwords.forEach((val, i) => {
        val.style.border = '2px solid red';
      })


      alert(`
        Error: Form Validation Failed!
        email: ${this.state.form.emailValue}
        pw: ${this.state.form.pwValue}
        pw confirmation: ${this.state.form.pwConfirmationValue}
        `);
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.form.emailValue} onChange={(e) => this.handleChange('emailValue', e)} placeholder="email"/><br/>
          <input type="text" className="passwords" value={this.state.form.pwValue} onChange={(e) => this.handleChange('pwValue', e)} placeholder="password"/><br/>
          <input type="text" className="passwords" value={this.state.form.pwConfirmationValue} onChange={(e) => this.handleChange('pwConfirmationValue', e)} placeholder="password confirmation"/><br/>
          <input type="submit" /><br/>
        </form>
      </div>
    );
  }
}

export default App;
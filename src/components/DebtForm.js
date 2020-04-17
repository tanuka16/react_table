import React, { Component } from 'react';

class DebtForm extends Component {
  state = {
    CreditorName: "",
    FirstName: "",
    LastName: "",
    MinPaymentPercentage: "",
    Balance: ""
  }

  

handleSubmit = (e)=> {
  e.preventDefault()
  this.props.onNewDebtSubmit(this.state)
}

handleChange = (e) =>{
  this.setState({[e.target.name]: e.target.value})
}

render(){
  // console.log(this.state);
  return(
    <div>
        <h3>Add Debt!</h3>
        <form onSubmit={this.handleSubmit}>
        <button>Add Debt</button>
            <input value={this.state.CreditorName} onChange={this.handleChange} type="CreditorName" placeholder="CreditorName" name="CreditorName" />
            <input value={this.state.FirstName} onChange={this.handleChange} type="FirstName" placeholder="FirstName" name="FirstName" />
            <input value={this.state.LastName} onChange={this.handleChange} type="LastName" placeholder="LastName" name="LastName" />
            <input value={this.state.MinPaymentPercentage} onChange={this.handleChange} type="MinPaymentPercentage" placeholder="MinPaymentPercentage" name="MinPaymentPercentage" />
            <input value={this.state.Balance} onChange={this.handleChange} type="Balance" placeholder="Balance" name="Balance" />
        </form>
      </div>

    )
  }
}
export default DebtForm;

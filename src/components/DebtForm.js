import React, { Component } from 'react';

class DebtForm extends Component {
  state = {
    creditorName: "",
    firstName: "",
    lastName: "",
    minPaymentPercentage: "",
    balance: ""
  }


handleSubmit = (e)=> {
  e.preventDefault()
  this.props.onNewDebtSubmit(this.state)
}

handleChange = (e) =>{
  this.setState({[e.target.name]: e.target.value})
  // console.log(this.state);
}

render(){
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
        <button className='dbutton'>Add Debt</button>
        <br />
            <input value={this.state.creditorName} onChange={this.handleChange} type="creditorName" placeholder="CreditorName" name="creditorName"  />
            <input value={this.state.firstName} onChange={this.handleChange} type="firstName" placeholder="FirstName" name="firstName" />
            <input value={this.state.lastName} onChange={this.handleChange} type="lastName" placeholder="LastName" name="lastName" />
        <br />
            <input value={this.state.minPaymentPercentage} onChange={this.handleChange} type="minPaymentPercentage" placeholder="MinPaymentPercentage" name="minPaymentPercentage" />
            <input value={this.state.balance} onChange={this.handleChange} type="balance" placeholder="Balance" name="balance" />
        </form>
      </div>

    )
  }
}
export default DebtForm;

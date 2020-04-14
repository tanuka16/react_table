import React, { Component } from 'react';
import DebtTable from './components/DebtTable'
import DebtForm from './components/DebtForm'
import './App.css';


class App extends Component {
  state = {
    debt: []
  }



  componentDidMount(){
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
      .then(res => res.json())
      .then((debtData) => {
        this.setState({ debt: debtData})
        // console.log(this.state)
      })
    }

  handleNewDebtSubmit = (newDebtData) => {
  const newDebt = {
        creditorName: newDebtData.creditorName,
        firstName: newDebtData.firstName,
        lastName: newDebtData.lastName,
        minPaymentPercentage: newDebtData.minPaymentPercentage,
        balance: newDebtData.balance,
      }
    console.log(newDebtData);
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json", {
      method: 'POST',
        headers: {
          "Authorization": "http://localhost:3000/",
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newDebt)
    })
    .then(res => res.json())
    .then(debtNew => {
      this.setState({debt: [...this.state.debt, debtNew]})
    })
  }


  render(){
    // console.log(this.state.debt)
    return (
      <div>
      <h1>Debt Table</h1>

        <DebtTable debt={this.state.debt}/>
        <DebtForm onNewDebtSubmit={this.handleNewDebtSubmit}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import DebtTable from './components/DebtTable'
import DebtForm from './components/DebtForm'
import './App.css';


class App extends Component {
  state = {
    debt: [],
    count: 0
  }

  count(checked){
    let {count} = this.state
    if(checked){
      count++
    }else{
      count --;
    }
    this.setState({count})
  }


  removeDebt=(debt)=>{
    // console.log(debt1);
    // console.log(this.state);
    let index = this.state.debt.findIndex(debtTable => debtTable.id === debt.id)
     console.log('index', index);
     let debts = [...this.state.debt]
     debts.splice(index, 1)
     this.setState({
       debt: debts
     })
     // console.log(debts);
     // this.setState({portfolio: [debt, ...this.state.debt]})
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

        <DebtTable debt={this.state.debt}
            count={this.count.bind(this)}
            removeDebt={this.removeDebt.bind(this)}/>
          <h2>Total Checkbox Checked: {this.state.count}</h2>
          <h2>Total Row Count: {this.state.debt.length}</h2>
        <DebtForm onNewDebtSubmit={this.handleNewDebtSubmit}/>
      </div>
    );
  }
}

export default App;

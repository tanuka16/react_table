import React, { Component } from 'react';
import DebtTable from './components/DebtTable'
import DebtForm from './components/DebtForm'
import './App.css';
// import {withOktaAuth} from '@okta/okta-react'


class App extends Component {
  state = {
    debt: []
  }

//dynamicly grabs data from an array of debts
  componentDidMount(){
    fetch("https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json")
      .then(res => res.json())
      .then((debtData) => {
        this.setState({ debt: debtData})                                          //change the state using setState
        // console.log(this.state)
      })
    }
// Add new data
  handleNewDebtSubmit = (newDebtData) => {
  const newDebt = {
        creditorName: newDebtData.creditorName,
        firstName: newDebtData.firstName,
        lastName: newDebtData.lastName,
        minPaymentPercentage: newDebtData.minPaymentPercentage,
        balance: newDebtData.balance
      };
      console.log(newDebt);
      // const proxyurl = { "/*": { "target": "http://localhost:3000" } }
      const proxyurl = "http://localhost:3000/"
      const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      fetch((proxyurl + url), {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newDebt)
      })
      .then(res => res.json())
      .then(debtNew => {                                                  //console.log(debtNew)
        this.setState({debt: [...this.state.debt, debtNew]})
        //here I'm making a copy of all the debt data and prepending to it .obj(this.state.debt)
        })
    // this.setState({debt: [...this.state.debt, newDebt]})

  }

// Delete data
  handleRemove=(debt)=>{

    let index = this.state.debt.findIndex(debtTable => debtTable.id === debt.id)
     console.log('index', index);
     let debts = [...this.state.debt]
     debts.splice(index, 1)
     const proxyurl = "http://localhost:3000/"
     const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json${id}"
     fetch((proxyurl + url), {
       method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({index})
             }).then(res => res.json())
              .then(index => {
                this.setState({
                  debt: debts
                })
              })
              // console.log(debts);
              // this.setState({debt: debts})
  }


  render(){
    // console.log(this.state.debt)
    return (
      <div>
      <h1>Debt Table</h1>
        {/* render down my debts*/}
        <DebtTable debts={this.state.debt}
            handleRemove={this.handleRemove}/>

        <DebtForm onNewDebtSubmit={this.handleNewDebtSubmit}/>



      </div>
    );
  }
}

export default App;

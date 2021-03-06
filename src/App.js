import React, { Component } from 'react';
import DebtTable from './components/DebtTable'
import DebtForm from './components/DebtForm'
import './App.css';
// import {withOktaAuth} from '@okta/okta-react'


class App extends Component {
  state = {
    debt: []
  }

//dynamicly grabs data from an array of objects
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
        balance: newDebtData.balance
      };
      console.log(newDebt);
      // const proxyurl = { "/*": { "target": "http://localhost:3000" } }
      const proxyurl = "http://localhost:3000/"
      const url = "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json"
      fetch( (proxyurl + url), {
        method: 'POST',
          headers: {
            // 'Authorization': 'Basic'+ auth,
            // 'Origin': "https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json",
            // 'Access-Control-Request-Method': "POST, GET, OPTIONS, DELETE, PUT",
            // 'Access-Control-Request-Headers': 'http://localhost:3000/',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(newDebt)
      })
      .then(res => res.json())
      .then(debtNew => {                                                  //console.log(debtNew)
        this.setState({debt: [...this.state.debt, debtNew]})
      // .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
      })
    // this.setState({debt: [...this.state.debt, newDebt]})

  }

  handleRemove=(debt)=>{
    // console.log(debt1);
    // console.log(this.state);

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
      <div className="container1">
      <h1>Debt Table</h1>

        <DebtTable debts={this.state.debt}
            handleRemove={this.handleRemove}
        />

        <DebtForm onNewDebtSubmit={this.handleNewDebtSubmit}/>



      </div>
    );
  }
}

export default App;

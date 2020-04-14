import React, { Component } from 'react';
// import TableRow from './TableRow'


class DebtTable extends Component {
  state={
    selected: {}
  }
  // displayDeptTable = () =>{
  //   return this.props.debt.map(debt => {
  //     return(
  //         <tr key={debt.id}>
  //             <td>{debt.creditorName}</td>
  //             <td>{debt.firstName}</td>
  //             <td>{debt.lastName}</td>
  //             <td>{debt.minPaymentPercentage}</td>
  //             <td>{debt.balance}</td>
  //           </tr>
  //         )
  //   })
  // }

  // const total =

  render(){
    // console.log(this.props);
    return(
      <div>
        <table>
        <thead>
        <tr>
          <th><input type='checkbox'/>CreditorName</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>MinPaymentPercentage</th>
          <th>Balance</th>
        </tr>
        </thead>
          <tbody>
          {
            this.props.debt.map(debt => {
              return(
                  <tr key={debt.id}>
                      <td><input type='checkbox'/>{debt.creditorName}</td>
                      <td>{debt.firstName}</td>
                      <td>{debt.lastName}</td>
                      <td>{debt.minPaymentPercentage}</td>
                      <td>{debt.balance}</td>
                    </tr>)

                })
              }
          </tbody>
        </table>
        <br />
        <button>REMOVE DEBT</button>
      </div>
    );
  }
}


export default DebtTable;

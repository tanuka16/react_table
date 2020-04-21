import React, { Component } from 'react';
import TotalValue from './TotalValue'
class DebtTable extends Component {
  state={
    checked: false,
    count: 0,
    total: 0
  }

// NOT WORKING YET
  handleCheck = ()=> {
    let checked = !this.state.checked
    let {count} = this.state
    //1. check if onSelectAll is true, if yes
    if (checked) {
      count ++
    }else{
      count --
    }
    this.setState({count})
    console.log(checked);
  }

// NOT WORKING YET
  handleRemove=(debt)=>{
    // console.log(this.props);
    if(this.state.checked === true){
      this.props.removeDebt()
    }
    // this.setState({checked})
    // console.log(checked);
    // if (e.target.checked){
    //   this.props.removeDebt()
    // }

  }


//Selects all checkboxes --- Works
  onSelectAll = () => {
    const parent = document.getElementById("parent");
    let input = document.getElementsByTagName('input');
    // console.log(this.state);

    if(parent.checked ===  true){
      for (var i = 0; i < input.length; i++) {
        if(input[i].type ==="checkbox" && input[i].id === "child_check" && input[i].checked === false){
          input[i].checked = true;
          // console.log(input[i]);
        }
      }
    }
    else if(parent.checked ===  false){
      for (var i = 0; i < input.length; i++) {
        if(input[i].type ==="checkbox" && input[i].id === "child_check" && input[i].checked===true){
          input[i].checked = false;
          // console.log(input[i]);
        }
      }
    }
  }


//Select each checkbox === works
  onSelectChange =(e)=>{
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.checked })
    console.log(e.target.checked);
  }

// NOT WORKING YET
  totalBalance = () =>{
    const sum = document.getElementById("sum");
    for (var i = 0; i < sum.length; i++) {
      for (var j = 1; j < sum.length; j++) {
        let total = sum[i] + sum[j]
        return total
      }
    }
    return sum;
    // return (this.props.debt.balance.reduce((a,b) => a + b, 0))
    // debts.balance.forEach((a, b) =>{
    //   return a + b
    // })
    // console.log(this.props.debt);
    // debts.balance.reduce(
    //   (debt, balance) => debt + balance
    // )
  }



  render(){
    // console.log(this.totalBalance);

    // const totalBalance = this.props.debt.forEach(debt => {
    //     debt.balance.reduce(function(y, x){
    //       return y + x
    //     }, 0)
    //
    //
    // })

    return(
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
            <input type="checkbox" name="check" id="parent"
              onClick={this.onSelectAll.bind(this)} onChange={this.handleCheck} count={this.state.count}/>
          </th>
          <th>CreditorName</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>MinPaymentPercentage</th>
          <th>Balance</th>
        </tr>
        </thead>
          <tbody>
          {
            this.props.debt.map((debt, i) => {
              return(
                  <tr key={i}>
                      <td className="select">
                        <input type="checkbox" name="check1" id="child_check"
                          onChange={this.onSelectChange.bind(this)}
                          check={this.state.checked.toString()}
                          onChange={this.handleCheck}
                          />
                      </td>
                      <td>{debt.creditorName}</td>
                      <td>{debt.firstName}</td>
                      <td>{debt.lastName}</td>
                      <td>{debt.minPaymentPercentage}</td>
                      <td id="sum">{debt.balance}</td>
                    </tr>
                  )
                })
              }


          </tbody>
          <tbody>

          </tbody>
        </table>
        <br />
        <h2>Total Checkbox Checked: {this.state.count}</h2>

        <div onClick={this.props.handleRemove} onChange={()=>this.handleRemove()}><button>REMOVE DEBT</button></div>
        <TotalValue total={this.state.total} balance={this.totalBalance}/>
      </div>
    );
  }
}


export default DebtTable;

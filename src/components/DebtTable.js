import React, { Component } from 'react';

class DebtTable extends Component {
  state={
    checked: false
  }


  handleCheck = ()=> {
    let checked = !this.state.checked
    if (checked) {
      this.props.count(true)
    } else {
      this.props.count(true)
    }
    this.setState({checked})
  }

  handleRemove=(debt)=>{
    // console.log(this.props);
    if(this.state.checked === true){
      this.props.removeDebt()
    }
    // const checked = this.state.checked.filter(i => i.id !== debt.id)
    // this.setState({checked})
    // console.log(checked);


  }


//Selects all checkboxes --- js
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


//Select each checkbox === done
  onSelectChange =(e)=>{
    // e.preventDefault()
    this.setState({ [e.target.name]: e.target.checked })
    console.log(e.target.checked);
  }




  render(){
    // console.log(this.state);
    return(
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
            <input type="checkbox" name="check" id="parent"
              onClick={this.onSelectAll.bind(this)}/>
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
            this.props.debt.map(debt => {
              return(
                  <tr key={debt.id}>
                      <td className="select">
                        <input type="checkbox" name="check1" id="child_check"
                          onChange={this.onSelectChange.bind(this)}
                          check={this.state.checked.toString()}
                          onChange={()=>this.handleCheck()} />
                      </td>
                      <td>{debt.creditorName}</td>
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
        <div onClick={this.props.removeDebt} onChange={()=>this.handleRemove()}><button>REMOVE DEBT</button></div>

      </div>
    );
  }
}


export default DebtTable;

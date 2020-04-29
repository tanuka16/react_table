import React, {Component} from 'react';
// import {Row, Col} from 'react-bootstrap'

class TotalTable extends Component{
  state={
    checked: false,
    count: 0
  }
  handleCheckCount=()=> {
    let input = document.getElementsByTagName('input');
    let count= this.state.count
    for (var i = 0; i < input.length; i++) {
      if (input[i].type === "checkbox" && input[i].checked === true) {
        count++
        // alert((":checkbox:checked").length);
      }
    }
  }
  console.log(count)

  render(){
    return(
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
            <input type="checkbox" name="check" id="parent"
              onClick={this.onSelectAll.bind(this)} onChange={this.handleCheckCount}/>
          </th>
          <th>CreditorScore</th>
          <th>FirstName</th>
          <th>LastName</th>

        </tr>
        </thead>
      </table>

        <h2>Total Number of Checkbox Selected: </h2>

      </div>
    )
  }

}
export default TotalTable

import React, {Component} from 'react';
// import {Row, Col} from 'react-bootstrap'
import ReactDOM from 'react-dom';

<div id="app"></div>


class Checkbox extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      checked: false
    }
  }
  handleCheck () {
    let checked = !this.state.checked
    if (checked) {
      this.props.count(true)
    } else {
      this.props.count(false)
    }
    this.setState({checked})
  }
  render () {
    return (
      <div>
        <label>
          {this.props.name}
          <input type='checkbox' checked={this.state.checked} onChange={() => this.handleCheck()}/>
        </label>
       </div>
    )
  }
}

class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  
  count (checked) {
    let { count } = this.state
    if (checked) {
    	count ++
		} else {
    	count --
    }

    console.log(count)
    this.setState({count})
  }
  
  render(){
    const arr = ['Checkbox1', 'Checkbox2', 'Checkbox3']
    // Note: make sure to use bind on the count function since we are
    // using the state from the parent component
    return (
     <div>
        <form >
         {arr.map(a => <Checkbox name={a} count={this.count.bind(this)}/>)}
        </form>
        {this.state.count}
     </div>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);


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

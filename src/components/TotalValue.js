import React, {Component} from 'react';
// import {Row, Col} from 'react-bootstrap'

class TotalValue extends Component{

  render(){
    return(
      <div>

      Total Balance: {this.props.balance}

      </div>
    )
  }

}
export default TotalValue

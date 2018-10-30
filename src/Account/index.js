import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super();

    this.state = {
      value: Number,
      balance: 0
    }
  }
  handleInputChange = (e) => {
    this.setState({
      value: e.currentTarget.value
    });
  }
makeDeposite = (e) => {
  e.preventDefault();
  const amount = parseInt(this.state.value);
  const newAmount = this.state.balance + amount;
  this.setState({
    balance: newAmount
  })
}
makeWithdrawl = (e) => {
  e.preventDefault();
  const amount = parseInt(this.state.value);
  const newAmount = this.state.balance - amount;
  if(newAmount < 0){
    alert('insufficiant funds')
    return;
  }
  this.setState({
    balance: newAmount
  })

}


  render() {
    let balanceClass = 'balance';
    if(balanceClass === 0){
      balanceClass = 'zero'
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <form>
          <input type="text" value={this.state.value} onChange={this.handleInputChange} />
        </form>
        <input type="button" value="Deposit" onClick={this.makeDeposite} />
        <input type="button" value="Withdraw" onClick={this.makeWithdrawl}/>
      </div>
    )
  }

}
export default Account;

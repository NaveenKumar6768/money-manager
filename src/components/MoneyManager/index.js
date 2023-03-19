import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: 'INCOME',
    transactionsList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    if (title !== '' && amount !== '') {
      const newTransaction = {
        id: uuidv4(),
        title,
        amount: parseInt(amount),
        type,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        title: '',
        amount: '',
        type: 'INCOME',
      }))

      if (type === 'INCOME') {
        this.setState(prevState => ({
          income: prevState.income + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses + parseInt(amount),
        }))
      }
    }
  }

  onDeleteTransaction = eachTransaction => {
    const {id, amount, type} = eachTransaction

    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        each => each.id !== id,
      ),
    }))
    if (type === 'INCOME') {
      this.setState(prevState => ({income: prevState.income - amount}))
    } else {
      this.setState(prevState => ({expenses: prevState.expenses - amount}))
    }
  }

  onChangeTitle = event => this.setState({title: event.target.value})

  onChangeAmount = event => this.setState({amount: event.target.value})

  onChangeTransactionType = event => {
    this.setState({type: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {income, expenses, title, amount, transactionsList} = this.state
    console.log(transactionsList)

    const space = ''
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-container">
            <h1 className="heading">Hi, Richard</h1>
            <p className="main-text">
              Welcome back to your{' '}
              <span className="money-manager">Money Manager</span>
            </p>
          </div>
          <MoneyDetails income={income} expenses={expenses} />
          <div className="bottom-container">
            <div className="add-transaction-container">
              <h1 className="transaction-heading">Add Transaction</h1>
              <form className="form" onSubmit={this.onAddTransaction}>
                <label className="lables" htmlFor="title">
                  TITLE
                </label>
                <br />
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={this.onChangeTitle}
                  placeholder="Title"
                  className="input"
                />
                <br />
                <label className="lables" htmlFor="amount_">
                  AMOUNT
                </label>
                <br />
                <input
                  type="number"
                  id="amount_"
                  value={amount}
                  onChange={this.onChangeAmount}
                  placeholder="Amount"
                  className="input"
                />
                <br />
                <label className="lables" htmlFor="dropDown">
                  Type
                </label>
                <br />
                <select
                  onChange={this.onChangeTransactionType}
                  id="dropDown"
                  className="input"
                >
                  {transactionTypeOptions.map(eachOption => (
                    <option
                      value={eachOption.optionId}
                      key={eachOption.optionId}
                    >
                      {eachOption.displayText}
                    </option>
                  ))}
                </select>
                <br />
                <button type="submit" className="add-btn">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="transaction-heading">History</h1>
              <div className="history-items-container">
                <div className="history-card">
                  <p className="history-headings">Title</p>
                  <p className="history-headings">Amount</p>
                  <p className="history-headings">Type</p>
                  <p>{space}</p>
                </div>
                <ul className="history-items">
                  {transactionsList.map(eachTransaction => (
                    <TransactionItem
                      eachTransaction={eachTransaction}
                      key={eachTransaction.id}
                      onDeleteTransaction={this.onDeleteTransaction}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager

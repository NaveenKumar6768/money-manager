import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props
  const balance = income - expenses
  return (
    <div className="money-details-container">
      <div className="money-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
          alt="balance"
          className="money-details-image"
        />
        <div className="money-text-container">
          <p className="money-heading">Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            {balance}
          </p>
        </div>
      </div>
      <div className="money-card income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="money-details-image"
        />
        <div className="money-text-container">
          <p className="money-heading">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            {income}
          </p>
        </div>
      </div>
      <div className="money-card expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-details-image"
        />
        <div className="money-text-container">
          <p className="money-heading">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails

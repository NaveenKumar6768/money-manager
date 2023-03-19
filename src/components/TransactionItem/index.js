import './index.css'

const TransactionItem = props => {
  const {eachTransaction, onDeleteTransaction} = props
  const {id, title, amount, type} = eachTransaction
  console.log(id)

  console.log(typeof amount)
  const typeText = type === 'INCOME' ? 'Income' : 'Expenses'

  const onHitDelete = () => onDeleteTransaction(eachTransaction)

  return (
    <li className="history-card-item">
      <p className="history-headings head">{title}</p>
      <p className="history-headings head">Rs {amount}</p>
      <p className="history-headings head">{typeText}</p>
      <button
        onClick={onHitDelete}
        data-testid="delete"
        type="button"
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem

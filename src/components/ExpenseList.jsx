import React from 'react'


const ExpenseList = () => {
  return (
    <div>
        <h2>Expense List</h2>
            <ul className='expenses'>
                {expenses.map(expense => (
                    <li key={expense.id} className='expense'>{expense.expense}: ${expense.amount}
                        <button className='btn edit' onClick={() => editExpense(expense.id)}><HiPencil/></button>
                        <button className='btn delete' onClick={() => deleteExpense(expense.id)}><FaTrashAlt/></button>
                    </li>
                ))}
            </ul>
        <p>Total: ${getTotal(expenses)}</p>
    </div>
  )
}

export default ExpenseList
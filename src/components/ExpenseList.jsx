import React from 'react'
import EditExpense from './EditExpense'
import {HiPencil} from 'react-icons/hi'
import {FaTrashAlt} from 'react-icons/fa'

const ExpenseList = ({expenses, deleteExpense, enterEditMode, editing, editedExpense, editExpense, closeEditMode}) => {

    return (
    <div>
        <h2>Expense List</h2>
            <ul className='expenses'>
                {expenses.map(expense => (
                    <li key={expense.id} className='expense'>
                        <div className='expense__container'>
                            <div className='expense__item'>
                                {expense.name}: ₦{expense.value}
                            </div>
                            <div className='expense__btn'>
                                <button className='btn edit' onClick={() => enterEditMode(expense)}><HiPencil strokeWidth={2} width={24} height={24}/></button>
                                <button className='btn delete' onClick={() => deleteExpense(expense.id)}><FaTrashAlt strokeWidth={2} width={24} height={24}/></button>
                            </div>
                        </div>
                        {
                            editing && (editedExpense.id === expense.id) && (<EditExpense editedExpense={editedExpense} editExpense={editExpense} closeEditMode={closeEditMode}/>)
                        }
                    </li>
                    
                ))}
            </ul>
    </div>
  )
}

export default ExpenseList
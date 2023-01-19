import React, {useState} from 'react'
import useLocalStorage from '../hook/useLocalStorage';
import {FaTrashAlt} from 'react-icons/fa'
import {AiOutlinePlus} from 'react-icons/ai'
import {HiPencil} from 'react-icons/hi'



const Expenses = () => {
    const [expenses, setExpenses] = useLocalStorage('key',[]);
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState(0);
    const [editingIndex, setEditingIndex] = useState(null);


    const addExpense = (event) => {
        setExpenses([...expenses, {id:Date.now(), expense, amount}]);
    }

    const deleteExpense = (id) => {
        setExpenses(prev => prev.filter(e => e.id !== id));
    }

    const editExpense = (expense, amount) => {
        const updatedExpenses = [...expenses];
        updatedExpenses[editingIndex] = { id: updatedExpenses[editingIndex].id, expense, amount};
        setExpenses(updatedExpenses);
        setEditingIndex(null);
      };      
    
    const getTotal = (expenses) => {
        let total = 0;
        for (let expense of expenses){
            total+= +expense.amount;
        }
        return total;
    }

    return (
        <div>
            <form className='form' onSubmit={event => {
                event.preventDefault();
                if (editingIndex === null) {
                    addExpense({expense, amount});
                } else {
                    editExpense(expense, amount);
                }
                }}>
                <label>
                    Expense: 
                    <input type="text" name='expense' value={editingIndex === null ? expense : expenses[editingIndex].expense} onChange={event => setExpense(event.target.value)} maxLength={60}/>
                </label>
                <label>
                    Amount: 
                    <input type="number" name='amount' value={editingIndex === null ? amount : expenses[editingIndex].amount} onChange={event => setAmount(event.target.value)} maxLength={8}/>
                </label>
                <button className='btn' type="submit">
                    {editingIndex === null ? <AiOutlinePlus/> : 'Save'}
                </button>
            </form>

            <h2>Expense List</h2>
            <ul className='expenses'>
                {expenses.map(expense => (
                    <li key={expense.id} className='expense'>{expense.expense}: ${expense.amount}
                        <button className='btn edit' onClick={() => setEditingIndex(expense.id)}><HiPencil/></button>
                        <button className='btn delete' onClick={() => deleteExpense(expense.id)}><FaTrashAlt/></button>
                    </li>
                ))}
            </ul>

            <p>Total: ${getTotal(expenses)}</p>
        </div>
    )
}

export default Expenses

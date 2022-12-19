import React, {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'




const Expenses = ({addExpense}) => {
    const [expense, setExpense] = useState("");
    const [amount, setAmount] = useState(0);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        addExpense({id:Date.now(), name: expense, value: amount})
        setExpense('');
        setAmount(0);
    }

    return (
        <div>
            <form className='form' onSubmit={handleFormSubmit}>
                <div className='wrapper'>
                    <label className=''>
                        Expense:
                        <input className='input' type="text" id="expense" name='expense' value={expense} onChange={event => setExpense(event.target.value)} maxLength={15} required placeholder='Enter Expense'/>
                    </label>
                    <label className=''>
                        Amount:
                        <input className='input' type="number" min="1" max={1000000} id="amount" name='amount' value={amount} onChange={event => setAmount(parseInt(event.target.value))} required placeholder='Enter Amount'/>
                    </label>
                </div>
                <button className='btn add' aria-label='Add Expense' type="submit">
                    <AiOutlinePlus strokeWidth={3} width={24} height={24}/>
                </button>
            </form>
        </div>
    )
}

export default Expenses

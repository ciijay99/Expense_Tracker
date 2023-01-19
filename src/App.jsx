import { useState } from 'react';
import ExpenseList from './components/ExpenseList';
import Expenses from './components/Expenses';
import useLocalStorage from './hook/useLocalStorage';

const App = () => {
  const [expenses, setExpenses] = useLocalStorage('key', []);
  // const [expense, setExpense] = useState("");
  // const [amount, setAmount] = useState(0);
  const [editedExpense, setEditedExpense] = useState(null);
  const [editing, setEditing] = useState(false);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const editExpense = (expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((e) =>
        e.id === expense.id
          ? { ...e, name: expense.name, value: expense.value }
          : e
      )
    );
    closeEditMode();
  };

  /* const editExpense = (expense, amount) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[editingIndex] = { id: expenses[editingIndex].id, expense, amount };
    setExpenses(updatedExpenses);
    setEditingIndex(null);
  }; */

  const closeEditMode = () => {
    setEditing(false);
  };

  const enterEditMode = (expense) => {
    setEditedExpense(expense);
    setEditing(true);
  };

  const getTotal = (expenses) => {
    let total = 0;
    for (let expense of expenses) {
      total += +expense.value;
    }
    return total;
  };

  return (
    <div className='container'>
      <header>
        <h1>My Expense Tracker</h1>
      </header>
      <Expenses addExpense={addExpense} />
      {expenses && (
        <ExpenseList
          expenses={expenses}
          deleteExpense={deleteExpense}
          enterEditMode={enterEditMode}
          editing={editing}
          editedExpense={editedExpense}
          editExpense={editExpense}
          closeEditMode={closeEditMode}
        />
      )}
      <br />
      <p className='total'>Total: ₦{getTotal(expenses)}</p>
    </div>
  );
};

export default App;

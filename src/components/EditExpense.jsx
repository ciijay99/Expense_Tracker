import React, { useState, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';

const EditExpense = ({ editedExpense, editExpense, closeEditMode }) => {
  const [updateExpenseName, setUpdateExpenseName] = useState(
    editedExpense.name
  );
  const [updateExpenseValue, setUpdateExpenseValue] = useState(
    editedExpense.value
  );

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === 'Escape' && closeEditMode();
    };
    window.addEventListener('keydown', closeModalIfEscaped);

    window.removeEventListener('keydown', closeModalIfEscaped);
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    editExpense({
      ...editedExpense,
      name: updateExpenseName,
      value: updateExpenseValue,
    });
  };

  return (
    <div
      role='dialog'
      aria-labelledby='editExpense'
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <form
        className='form'
        onSubmit={handleFormSubmit}
      >
        <div className='wrapper'>
          <label className=''>
            Expense:
            <input
              className='input'
              type='text'
              id='editExpense'
              name='expense'
              value={updateExpenseName}
              onInput={(event) => setUpdateExpenseName(event.target.value)}
              maxLength={15}
            />
          </label>
          <label className=''>
            Amount:
            <input
              className='input'
              min='1'
              max={1000000}
              type='number'
              id='editAmount'
              name='amount'
              value={updateExpenseValue}
              onInput={(event) => setUpdateExpenseValue(event.target.value)}
              maxLength={8}
            />
          </label>
        </div>
        <button
          className='btn check'
          aria-label='Add Expense'
          type='submit'
        >
          <FaCheck
            strokeWidth={2}
            width={24}
            height={24}
          />
        </button>
      </form>
    </div>
  );
};

export default EditExpense;

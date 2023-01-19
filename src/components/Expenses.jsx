import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Expenses = ({ addExpense }) => {
  const [expense, setExpense] = useState('');
  const [amount, setAmount] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    addExpense({ id: Date.now(), name: expense, value: amount });
    setExpense('');
    setAmount(0);
  };

  const theme = createTheme({
    components: {
      // CTRL + SPACE to find the component you would like to override.
      // For most of them you will need to adjust just the root...

      MuiTextField: {
        styleOverrides: {
          root: {
            '& label': {
              color: '#fff',
            },
            '& label.Mui-focused': {
              color: 'hsl(210,100%,50%)',
            },
            '& .MuiInputBase-input': {
              color: '#fff',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'hsl(210,100%,50%)',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#fff',
              },
              '&:hover fieldset': {
                borderColor: 'hsl(210,100%,50%)',
                borderWidth: '0.15rem',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'hsl(210,100%,50%)',
              },
            },
          },
        },
      },
    },
  });

  return (
    <div>
      <form
        className='form'
        onSubmit={handleFormSubmit}
      >
        <div className='wrapper'>
          <ThemeProvider theme={theme}>
            <TextField
              id='expense'
              label='Enter Expense'
              variant='outlined'
              value={expense}
              onChange={(event) => setExpense(event.target.value)}
              required
              sx={{
                width: '100%',
                borderRadius: '0.5rem',
                background: 'transparent',
                color: 'white !important',
                resize: 'none',
              }}
              inputProps={{ min: 2, max: 15 }}
            />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField
              id='amount'
              label='Enter Amount'
              type='number'
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{ min: 1, max: 1000000 }}
              name='amount'
              value={amount}
              onChange={(event) => setAmount(parseInt(event.target.value))}
              required
            />
          </ThemeProvider>
        </div>
        <button
          className='btn add'
          aria-label='Add Expense'
          type='submit'
        >
          <AiOutlinePlus
            strokeWidth={3}
            width={24}
            height={24}
          />
        </button>
      </form>
    </div>
  );
};

export default Expenses;

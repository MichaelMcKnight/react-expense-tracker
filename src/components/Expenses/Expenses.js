import React, { useState } from 'react';

import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = ({items}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeHandler={filterChangeHandler}
      />
      <ExpensesChart
        expenses={filteredExpenses}
      />
      <ExpensesList 
        items={filteredExpenses}
      />
    </div>
  );
}

export default Expenses;
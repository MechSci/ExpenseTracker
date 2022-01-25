import { useState } from "react";

import Card from "../UI/Card";
import "./ExpenseList.css";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpenseListHelper from "./ExpenseListHelper";
import ExpensesChart from "./ExpensesChart";

const ExpenseList = (props) => {
  const [year, setYear] = useState("2020");

  const yearChangeHandler = (selected) => {
    setYear(selected);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  /* let toRender = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    toRender = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        expenseTitle={expense.title}
        expenseAmount={expense.amount}
        expenseDate={expense.date}
      />
    ));
  } */

  return (
    <Card className="expenses">
      <ExpensesFilter currYear={year} onYearChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseListHelper expenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            expenseTitle={expense.title}
            expenseAmount={expense.amount}
            expenseDate={expense.date}
          />
        ))} */}
    </Card>
  );
};

export default ExpenseList;

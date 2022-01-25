import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const formSubmitHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: Math.random().toString(),
    };

    props.onExpenseFormSubmit(data);
  };
  const closeFormHandler = () => {
    setIsOpen(false);
  };

  const openFormHandler = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <div className="new-expense">
        <button onClick={openFormHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onCloseForm={closeFormHandler}
        onFormSubmit={formSubmitHandler}
      />
    </div>
  );
};

export default NewExpense;

import React, {useState} from 'react'
import "./NewExpenses.css";
import ExpensesForm from "./ExpensesForm";

const NewExpenses = (props) => {

  const [isediting,setisediting] =useState(false)

  const SaveExpenseDataHandler =(enteredExpensdeData)=>{
    const expenseData = {
      ...enteredExpensdeData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisediting(false);
  }

  const starteditinghandler=()=>{
    setisediting(true);
  }

  const stopeditinghandler=()=>{
    setisediting(false);
  }


  return (
    <div className="new-expense ">
      {!isediting && <button onClick={starteditinghandler}>Add New Expense</button>}
      {isediting && <ExpensesForm  onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopeditinghandler}/>}
    </div>
  );
};

export default NewExpenses;
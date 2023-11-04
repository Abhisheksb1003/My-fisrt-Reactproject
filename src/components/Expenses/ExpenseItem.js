import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem=(props)=> {

  
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <button onClick={clcikHandler}>Change Title</button>
      <button onClick={clickButton1}>Change Amount</button> */}
    </Card>
  );
}

export default ExpenseItem;

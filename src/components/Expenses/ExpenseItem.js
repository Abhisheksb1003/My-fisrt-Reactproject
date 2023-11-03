import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React,{useState} from 'react'

const ExpenseItem=(props)=> {

  const [title,setTitle]= useState(props.title)

  const [amount,setAmount]= useState(props.amount)

  const clcikHandler=()=>{
    setTitle('Update')
    console.log(title)
  }
  const clickButton1=()=>{
    setAmount('100')
    
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      

      <div className="expense-item__description">
        <h2>{title}</h2>
        <h2>{props.location}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clcikHandler}>Change Title</button>
      <button onClick={clickButton1}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;

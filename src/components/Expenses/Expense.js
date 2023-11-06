import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const Expense = (props)=> {
  const[filterdYear, setfilterdYear] = useState('2020');

  const FileChangeHandler = (selectedYear)=>{
    setfilterdYear(selectedYear);
  };


  const filterexpense=props.items.filter(data=>data.date.getFullYear()===parseInt(filterdYear))

  
  return (
    <Card className="expense">
      <ExpenseFilter
        selected={filterdYear}
        onChangeFilter={FileChangeHandler}
      />
      
      <ExpenseChart expenses={filterexpense}/>
      <ExpenseList items={filterexpense}/>
    </Card>
  );
};

export default Expense;
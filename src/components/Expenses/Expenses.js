import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import {useState} from 'react';

const Expenses=(props)=>{
    const [filteredYear,setFilteredYear]=useState('2020');

    const filterChangeHandler=selectedYear=>{
        setFilteredYear(selectedYear);
    }
return(
    <Card className="expense">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.items.map((expenses)=>(
            <ExpenseItem
            key={expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        date={expenses.date} 
        location={expenses.location}
        />
   
        ))}
        
    </Card>
);
        }

export default Expenses
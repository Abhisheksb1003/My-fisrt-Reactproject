import './NewExpenseForm.css';
import {useState} from 'react';

function NewExpenseForm(){
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titlehandler(event){
        setEnteredTitle(event.target.value);
    }

    function amounthandler(event){
        setEnteredAmount(event.target.value);
    }    

    function datehandler(event){
        setEnteredDate(event.target.value);
    }

    const submithandler=(event)=>{
        event.preventDefault();

        const ExpenseDate={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
        alert('submitted')
        console.log(ExpenseDate);
    };

    

    return (
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control label">
            <label>Title</label>
            <input type="text" id="title1" onChange={titlehandler}></input>
            </div>
            <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number" id="amount1" onChange={amounthandler}></input>
            </div>
            <div className="new-expense__control label">
            <label>Expense Date</label>
            <input type="date" id="date1" onChange={datehandler}></input>
            </div>
            <div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>

            </div>
            </div>

        
            

            


            </div>

        </form>
    )

}

export default NewExpenseForm
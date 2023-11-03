import './NewExpenseForm.css';
import {useState} from 'react';

function NewExpenseForm(){
    const [enteredtitle,setentertitle]=useState();
    const [enteredamount,setenteramount]=useState();
    const [entereddate,setenterdate]=useState();

function onchangeHandler(event){
    setentertitle(event.target.value);

}

function amounthandler(event){
    setenteramount(event.target.value)
}

function datehandler(event){
    setenterdate(event.target.value)
}



    return (
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__control label">
            <label>Title</label>
            <input type="text" onChange={onchangeHandler}></input>
            </div>
            <div className="new-expense__control label">
            <label>Amount</label>
            <input type="number" onChange={amounthandler}></input>
            </div>
            <div className="new-expense__control label">
            <label>Expense Date</label>
            <input type="date" onChange={datehandler}></input>
            </div>
            <div>
            <div className="new-expense__actions">
                <button>Add Expense</button>

            </div>
            </div>

        
            

            


            </div>

        </form>
    )

}

export default NewExpenseForm
import './NewExpenseForm.css';
import {useState} from 'react';

function NewExpenseForm(){
    // const [enteredtitle,setentertitle]=useState();
    // const [enteredamount,setenteramount]=useState();
    // const [entereddate,setenterdate]=useState();


    const [userinput, setuserinput]=useState({
        enteredtitle:'',
        enteredamount:'',
        entereddate:''
    });

function onchangeHandler(event){
    
    //code for multiple useState
    //setentertitle(event.target.value);
    // setuserinput({
    //     ...userinput,
    //     enteredtitle:event.target.value
    // });

    //using single useState
    setuserinput((prevState)=>{
        return {...prevState,enteredtitle:event.target.value};
    }
    
    )

}

function amounthandler(event){
    //setenteramount(event.target.value)
    setuserinput({
        ...userinput,
        enteredamount:event.target.value
    });

}

function datehandler(event){
   // setenterdate(event.target.value)
   setuserinput({
    ...userinput,
    entereddate:event.target.value
});

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
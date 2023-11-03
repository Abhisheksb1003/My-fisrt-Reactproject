import './NewExpenseForm.css';

function NewExpenseForm(){
function onchangeHandler(event){
    console.log(event.target.value);

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
            <input type="number"></input>
            </div>
            <div className="new-expense__control label">
            <label>Expense Date</label>
            <input type="date"></input>
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
import React from 'react';
import ExpenseDate from './EspenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";


//the expenseItem component outputs an expense item 

const ExpenseItem = (props) => {
  //getting the key:value pairs from function App in App.js. The keys are the attribute names eg title, amount, date and the values are the values set in function App
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;

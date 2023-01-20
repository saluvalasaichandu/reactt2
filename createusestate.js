import React,{useState}from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title,setTitle]=useState(props.title);
  const clickhandler=()=>{
    setTitle("updated")
    console.log(title)
  };
  const [amount,setamount]=useState(props.amount)

  const changeamount=()=>{
    setamount("100")
    console.log(amount)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickhandler}>Expense Deleted</button>
      <button onClick={changeamount}>expenseamount</button>
    </Card>
  );
}

export default ExpenseItem;

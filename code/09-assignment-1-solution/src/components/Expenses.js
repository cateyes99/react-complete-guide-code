import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      {props.items.map(i => {
        return (
          <ExpenseItem
            title={i.title}
            amount={i.amount}
            date={i.date}
          />
        )
      })}
    </div>
  );
}

export default Expenses;

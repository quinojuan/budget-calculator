import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const initialExpenses = [
  {
    id: uuidv4(),
    charge: "rent",
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: "car payment",
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: "credit card bill",
    amount: 1200,
  },
];

function App() {
  const [result, setResult] = useState(initialExpenses);
  console.log(result, setResult);
  return (
    <>
      <Alert />
      <ExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;

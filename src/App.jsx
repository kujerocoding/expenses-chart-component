import React, {useState} from 'react'
import ExpensesBarChart from './components/ExpensesBarChart'
import ExpensesData from './ExpensesData'

const App = () => {

  const [expensesData, setExpensesData] = useState({
    labels: ExpensesData.map(expense => expense.day),
    datasets: [{
      label: 'Spending - Last 7 days',
      data: ExpensesData.map(expense => expense.amount)
    }]
  })

  //console.log(expensesData)

  return (
    <div>
      <ExpensesBarChart chartData={expensesData}/>
    </div>
  )
}

export default App

import React, {useState} from 'react'
import ExpensesBarChart from './components/ExpensesBarChart'
import ExpensesData from './ExpensesData'
import './App.css'

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
    <div className='app--container'>
      <div className='balance--container'>
        <div> 
          <p>My Balance</p>
          <p>$921.48</p>
        </div>
        <img src="./src/assets/images/logo.svg" alt="" />
      </div>
      <div className='main--container'>
        <ExpensesBarChart chartData={expensesData}/>
        <div className='total--container'>
          <div>
            <p>Total this month</p>
            <p>$478</p>
          </div>
          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
      <div className='attribution'>
            Challenge by <a href="https://www.frontendmentor.io/home" target="_blank">Frontend Mentor.</a> Coded by kujerocoding
        </div>
    </div>
  )
}

export default App

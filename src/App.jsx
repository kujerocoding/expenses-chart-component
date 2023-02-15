import React, {useState} from 'react'
import ExpensesBarChart from './components/ExpensesBarChart'
import ExpensesData from './ExpensesData'
import './App.css'

const App = () => {

  const [expensesData, setExpensesData] = useState({
    labels: ExpensesData.map(expense => expense.day),
    datasets: [{
      label: 'Spending - Last 7 days',
      data: ExpensesData.map(expense => expense.amount),
      backgroundColor: ['#ec775f','#ec775f','#76b5bc','#ec775f','#ec775f'],
      borderRadius: 3,
      
    }]
  })

  //console.log(expensesData)

  return (
    <div className='app--container'>
      <div className='balance--container'>
        <div> 
          <p className='text--balance'>My Balance</p>
          <p className='text--balance--amount'>$921.48</p>
        </div>
        <img className='logo' src="./src/assets/images/logo.svg" alt="" />
      </div>
      <div className='main--container'>
        <h3 className='chart--title'>Spending - last 7 days</h3>
        <ExpensesBarChart chartData={expensesData}/>
        <div className='total--container'>
          <div>
            <p className='text--total'>Total this month</p>
            <p className='text--total--amount'>$478.33</p>
          </div>
          <div>
            <p className='text--percent'>+2.4%</p>
            <p className='text--lastmonth'>from last month</p>
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

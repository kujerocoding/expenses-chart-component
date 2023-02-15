import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const ExpensesBarChart = (props) => {
  return (
    <div className='chart--container'>
      <Bar data={props.chartData}/>
    </div>
  )
}

export default ExpensesBarChart

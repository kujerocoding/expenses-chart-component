import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const ExpensesBarChart = (props) => {

    const tooltip = {
        yAlign: 'bottom',
        callbacks: {
            title: function(chart){
                const amountExpense = chart[0].raw
                return `$${amountExpense}`
            },
            label: function(){
                return '';
            }
            }
        }
    

  return (
    <div className='chart--container'>
      <Bar data={props.chartData} 
           options={{
            scales:{
                y: {
                    display: false,
                    grid:{
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                },
                
            },
            plugins: {
                legend: {
                   display: false
                },
                tooltip,
            }
           
            
           }}/>
    </div>
  )
}

export default ExpensesBarChart

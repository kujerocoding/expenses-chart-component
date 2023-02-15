import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'


const ExpensesBarChart = (props) => {
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

               /*  title: {
                    align: 'start',
                    display: true,
                    text: 'Spending - Last 7 days',
                    color: '#382314',
                    padding: {
                        
                    },
                    font: {
                        size: 20,
                    }
                } */
                
            }
           }}/>
    </div>
  )
}

export default ExpensesBarChart

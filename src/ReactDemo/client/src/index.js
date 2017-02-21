import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const todoItems = [
  { text: 'Task1', key: new Date('2017/01/05 08:00:00').getTime(), isComplete: false },
  { text: 'Task2', key: new Date('2017/01/05 10:00:00').getTime(), isComplete: false },
  { text: 'Task3', key: new Date('2017/01/05 15:25:00').getTime(), isComplete: false },
  { text: 'Task4', key: new Date('2017/01/06 11:00:00').getTime(), isComplete: false }
]

ReactDOM.render(
  <App todoItems={todoItems} />,
  document.getElementById('root')
)

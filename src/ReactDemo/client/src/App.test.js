import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import { mount } from 'enzyme'
import App from './App'

const todoItems = [
  { text: 'Test Task1', key: new Date('2017/01/05 08:00:00').getTime(), isComplete: false },
  { text: 'Test Task2', key: new Date('2017/01/05 10:00:00').getTime(), isComplete: false },
  { text: 'Test Task3', key: new Date('2017/01/05 15:25:00').getTime(), isComplete: false },
  { text: 'Test Task4', key: new Date('2017/01/06 11:00:00').getTime(), isComplete: false }
]

it('renders without crashing and no props passed', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('renders without crashing and props passed', () => {
  const div = mount(<App todoItems={todoItems} />)
  expect(div.find('.todoListMain')).toBeDefined()
  expect(div.find('.todoListMain .tasksList li').length).toEqual(todoItems.length)
})

it('initial Task list renders 0 items', () => {
  const div = mount(<App />)
  expect(div.find('.todoListMain')).toBeDefined()
  expect(div.find('.todoListMain .tasksList li').length).toEqual(0)
})

it('can add new item', () => {
  const div = mount(<App todoItems={todoItems} />)
  const input = div.find('.todoListMain .header form input')
  const addTodoForm = div.find('.todoListMain .header form')
  
  input.simulate('change', {target: {value: 'New Task5'}})
  addTodoForm.simulate('submit')
  expect(div.find('.todoListMain .tasksList li').length).toEqual(5)
})

it('can remove existing todo', () => {
  const div = mount(<App todoItems={todoItems} />)
  const todoItemDeleteButton = div.find('.todoListMain .tasksList .item .destroy').first();
  console.log(todoItemDeleteButton.html())

  todoItemDeleteButton.simulate('click')
  expect(div.find('.todoListMain .tasksList li').length).toEqual(4)
})
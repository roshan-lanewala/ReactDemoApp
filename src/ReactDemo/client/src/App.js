import React from 'react'
import TodoList from './Components/Todos/TodoList'
import './App.css'

function resetItem() {
  return {
    text: '',
    key: -1,
    isComplete: false
  }
}

export default class App extends React.Component {

  update = (f, ...args) => this.setState(f(this.state, ...args))
  updateAsync = (f, ...args) => f(this.state, ...args).then(x => this.setState(x))

  state = {
    items: this.props.todoItems || [],
    newItem: resetItem()
  }

  actions = {
    onInputChange: (e) => this.update(this.onInputChange, e),
    onTaskStatusChange: (selectedKey, e) => this.update(this.onTaskStatusChange, selectedKey),
    addItem: (e) => this.update(this.addItem, e),
    deleteTask: (selectedKey) => this.update(this.deleteTask, selectedKey)
  }

  onTaskStatusChange = (modelState, selectedKey) => {
    const { items } = modelState
    const theSelectedItem = items.find(x => x.key === selectedKey)

    theSelectedItem.isComplete = !theSelectedItem.isComplete

    return modelState
  }

  onInputChange = (modelState, e) => {
    const { newItem } = modelState
    newItem.text = e.target.value
    newItem.key = Date.now()

    return modelState
  }

  addItem = (modelState, e) => {
    e.preventDefault()

    var { items, newItem } = modelState

    items.push(newItem)
    newItem = resetItem()

    return {items, newItem}
  }

  deleteTask = (modelState, selectedKey) => {
    const { items } = modelState
    const filteredItems = items.filter(x => x.key !== selectedKey)

    return { ...modelState, items: filteredItems }
  }

  render = () => {
    return (
    <TodoList items={this.state.items} newItem={this.state.newItem} actions={this.actions} />
    )
  }
}


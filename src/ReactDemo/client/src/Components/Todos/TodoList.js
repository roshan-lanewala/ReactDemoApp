import React from 'react'

const createTask = (actions, item) =>
  <li key={item.key}>
    <div className="item">
      <input className="toggle"
        type="checkbox"
        onChange={actions.onTaskStatusChange.bind(this, item.key)} />
      <label className={(item.isComplete ? 'strike' : '')}>{item.text}</label>
      <button className="destroy" onClick={actions.deleteTask.bind(this, item.key)}>X</button>
    </div>
  </li>

const TodoList = ({items, newItem, actions}) => {
  return (
      <div className="todoListMain">
      <div className="header">
        <form onSubmit={(e) => actions.addItem(e)}>
          <input onChange={actions.onInputChange}
            value={newItem.text}
            type="text"
            placeholder="enter todo item"></input>
          <button type="submit">Add</button>
        </form>
      </div>
      <TodoItems items={items} actions={actions} />
      <TaskSummary items={items} />
    </div>
  )
}

const TodoItems = ({items, actions}) => {
  var listItems = items.map(createTask.bind(this, actions))

  return (
    <ul className="tasksList">
      {listItems}
    </ul>
  )
}

const TaskSummary = ({items, actions}) =>
  <div className="taskSummary">
    <span className="incomplete-items-count">{items.filter(x => !x.isComplete).length} left</span>
  </div>

export default TodoList

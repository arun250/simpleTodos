// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {initialTodosList, deleteUser} = this.props
    const {id, title} = initialTodosList
    return (
      <li>
        <div className="todocontainer">
          <p>{title}</p>
          <button className="deletebutton" onClick={() => deleteUser(id)}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem

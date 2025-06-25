import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    initialTodosLists: initialTodosList,
    title: '',

    editingTodoId: null,
  }

  onDelete = id => {
    const {initialTodosLists} = this.state
    const resultData = initialTodosLists.filter(each => each.id !== id)
    this.setState({initialTodosLists: resultData})
  }

  editUser = id => {
    this.setState({editingTodoId: id})
  }

  onClickAddTodo = () => {
    const {title} = this.state
    if (title.trim() === '') return

    const match = title.trim().match(/^(.*?)(?:\s+(\d+))?$/)
    const baseText = match[1].trim()
    const number = parseInt(match[2], 10)

    if (number) {
      const newTodos = Array.from({length: number}, (_, i) => ({
        id: uuidv4(),
        title: `${baseText}`,
      }))
      this.setState(prevState => ({
        initialTodosLists: [...prevState.initialTodosLists, ...newTodos],
        title: '',
      }))
    } else {
      // Add single todo
      const newTodo = {
        id: uuidv4(),
        title: title.trim(),
      }
      this.setState(prevState => ({
        initialTodosLists: [...prevState.initialTodosLists, newTodo],
        title: '',
      }))
    }
  }

  updateTodoTitle = (id, newTitle) => {
    this.setState(prevState => ({
      initialTodosLists: prevState.initialTodosLists.map(todo =>
        todo.id === id ? {...todo, title: newTitle} : todo,
      ),

      editingTodoId: null,
    }))
  }

  onChangeUserInput = event => {
    this.setState({title: event.target.value})
  }

  render() {
    const {initialTodosLists, title, editingTodoId} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Simple Todos</h1>
          <div>
            <input
              type="text"
              className="textUserInput"
              value={title}
              placeholder="Enter your todo Item"
              onChange={this.onChangeUserInput}
            />
            <button className="add-button" onClick={this.onClickAddTodo}>
              Add
            </button>
          </div>

          <ul className="listitems">
            {initialTodosLists.map(eachItem => (
              <TodoItem
                key={eachItem.id}
                initialTodosList={eachItem}
                deleteUser={this.onDelete}
                editUser={this.editUser}
                isEditButtonClicked={editingTodoId === eachItem.id}
                updateTodoTitle={this.updateTodoTitle}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

// Write your code here

import {useState} from 'react'

import './index.css'

const TodoItem = props => {
  const {
    initialTodosList,
    deleteUser,

    updateTodoTitle,
  } = props
  const {id, title} = initialTodosList
  const [editedTitle, setEditedTitle] = useState(title)
  const [isChecked, setCheck] = useState(false)
  const [isEditButtonClicked, setIsEditButtonClicked] = useState(false)

  const onClickCheckInput = event => {
    setCheck(event.target.checked)
  }

  const editUser = () => {
    setIsEditButtonClicked(true)
  }

  const updateTodo = () => {
    updateTodoTitle(id, editedTitle)
    setIsEditButtonClicked(false)
  }

  const isCheckedTrue = isChecked ? 'isActive' : ''

  return (
    <li>
      <div className='todocontainer'>
        {isEditButtonClicked ? (
          <>
            <input
              type='text'
              value={editedTitle}
              onChange={e => setEditedTitle(e.target.value)}
              className='editTitle'
            />
            <button className='deletebutton' type='button' onClick={updateTodo}>
              Save
            </button>
          </>
        ) : (
          <>
            <input
              className='check-box'
              checked={isChecked}
              onChange={onClickCheckInput}
              type='checkbox'
              id={id}
            />
            <p className={`title ${isCheckedTrue}`}>{title}</p>
            <button className='deletebutton' onClick={editUser} type='button'>
              Edit
            </button>
          </>
        )}
        <button className='deletebutton' onClick={() => deleteUser(id)}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

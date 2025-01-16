import React from 'react'
import { deleteTask, getTask } from '../api/data'
import TaskDetail from '../component/TaskDetail'
import { useParams, useNavigate } from 'react-router-dom'
import './Task.css'
const Task = () => {
  const params = useParams()
  const navigate = useNavigate()
  const task = getTask(params.id)
  console.log('this is my task', task)
  return (
    <div className='Task'>
      <TaskDetail task={task} />
      <button
        onClick={() =>
          deleteTask(task.id).then(() => {
            navigate('/tasks')
          })
        }
      >
        Delete task {task.id}
      </button>
    </div>
  )
}

export default Task

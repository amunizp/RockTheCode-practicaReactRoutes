import React from 'react'
import Task from './Task'
import Title from '../component/Title'
import { getTasks } from '../api/data'
import TaskDetail from '../component/TaskDetail'
import { Link, Outlet } from 'react-router-dom'
import './Tasks.css'
const Tasks = () => {
  const tasks = getTasks()
  console.log(`these are my ${tasks}`)
  return (
    <div className='Tasks'>
      <Title title='Tasks' />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              <TaskDetail task={task} />
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  )
}

export default Tasks

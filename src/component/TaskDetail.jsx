import React from 'react'
import PropTypes from 'prop-types'
import { deleteTask } from '../api/data'
import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const TaskDetail = ({ task }) => {
  return (
    <>
      <h3>task number: {task.id}</h3>
      <p>category: {task.category} </p>
      <p>completed: {task.completed.toString()}</p>
      <p>description: {task.description}</p>
      <p>cost: £{task.cost}</p>
    </>
  )
}

//  TaskDetail.propTypes = {task.id: PropTypes.number, task.category: PropTypes.string, task.description: PropTypes.string, task.cost: PropTypes.number, task.completed: PropTypes.bool}

export default TaskDetail

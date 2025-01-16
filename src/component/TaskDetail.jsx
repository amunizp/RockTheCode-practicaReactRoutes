import './TaskDetail.css'
const TaskDetail = ({ task }) => {
  return (
    <div className='task-detail'>
      <h3>task number: {task.id}</h3>
      <p>category: {task.category} </p>
      <p>completed: {task.completed.toString()}</p>
      <p>description: {task.description}</p>
      <p>cost: £{task.cost}</p>
    </div>
  )
}

//  TaskDetail.propTypes = {task.id: PropTypes.number, task.category: PropTypes.string, task.description: PropTypes.string, task.cost: PropTypes.number, task.completed: PropTypes.bool}

export default TaskDetail

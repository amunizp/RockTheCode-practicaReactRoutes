import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../component/Title'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
      <Title title='Home' />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
        incidunt itaque architecto alias nemo a sequi explicabo consectetur
        tempore vel aliquam nostrum! Rem inventore eaque earum illo quasi
        assumenda neque.
      </p>
      <span>🏠? Let us go to tasks</span>
      <p>
        <Link to='tasks'>Task your heart out! </Link>
      </p>
    </div>
  )
}

export default Home

import React from 'react'
import useTeamNames from '../hooks/useTeamNames'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Loading from './Loading'

function Teams() {
  const {loading, response: teamNames} = useTeamNames()

  if (loading === true) {
    return <Loading />
  }
  
  return (
    <div className='container two-column'>
        <Sidebar
          title='Teams'
          list={teamNames}
        />

        <Outlet />
    </div>
  )
}

export default Teams
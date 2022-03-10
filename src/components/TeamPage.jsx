import React from 'react'
import { useParams } from 'react-router-dom'

function TeamPage() {
    const { teamId } = useParams()

  return (
    <div>
        Team page for {teamId}
    </div>
  )
}

export default TeamPage
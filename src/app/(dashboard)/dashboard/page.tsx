import { getServerSession } from 'next-auth'
import React from 'react'

const page = async () => {

    const session = await getServerSession()

  return (
    <div>Dashboard</div>
  )
}

export default page
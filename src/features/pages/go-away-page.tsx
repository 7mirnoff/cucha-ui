import React from 'react'

import { Link } from 'react-router-dom'

export const GoAwayPage: React.FC = () => {
  return (
    <>
      <div>Требуется авторизация</div>
      <Link to='/'>Go to main page</Link>
    </>
  )
}

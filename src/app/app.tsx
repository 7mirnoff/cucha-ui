import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { PrivateRoute } from '../features/components/private-route/private-route'
import { EditorPage } from '../features/pages/editor-page'
import { GoAwayPage } from '../features/pages/go-away-page'
import { NotFoundPage } from '../features/pages/not-found-page'

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EditorPage />} />
          <Route
            path='/secret'
            element={
              <PrivateRoute>
                <div>Secret</div>
              </PrivateRoute>
            }
          />
          <Route path='/go-away' element={<GoAwayPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

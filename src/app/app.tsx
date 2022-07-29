import React from 'react'

import { Editor } from '../features/components/editor'
import EditorProvider from '../features/providers/editor/editor-provider'

export const App: React.FC = () => {
  return (
    <>
      <EditorProvider>
        <Editor />
      </EditorProvider>
    </>
  )
}

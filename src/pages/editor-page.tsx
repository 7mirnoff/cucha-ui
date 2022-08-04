import React from 'react'

import { Editor } from '../components/editor'
import EditorProvider from '../providers/editor/editor-provider'

export const EditorPage = (): JSX.Element => {
  return (
    <EditorProvider>
      <Editor />
    </EditorProvider>
  )
}

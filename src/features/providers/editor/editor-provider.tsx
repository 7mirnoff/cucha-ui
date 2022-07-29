import React, { useEffect, useState } from 'react'

import EditorContext, { IEditorContext, IRecord } from './editor-context'

const mockData: IRecord[] = [
  {
    id: 0,
    value: 'Тест value'
  },
  {
    id: 1,
    value: 'Тест value'
  }
]

interface IEditorProvider {
  children: React.ReactNode
}

const EditorProvider: React.FC<IEditorProvider> = ({ children }) => {
  const records = mockData

  const [selectItemId, setSelectItemId] = useState<number>()

  useEffect(() => {
    setSelectItemId(records[0].id)
  }, [records])

  const editorContext: IEditorContext = {
    records: records,
    selectRecordsId: selectItemId,
    setSelectRecordsId: (id) => setSelectItemId(id)
  }

  return <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
}
export default EditorProvider

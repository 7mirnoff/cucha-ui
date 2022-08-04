import React, { useEffect, useState } from 'react'

import { IRecord, RecordCode } from '../../model/record'
import EditorContext, { IEditorContext } from './editor-context'

const mockData: IRecord[] = [
  {
    code: '0',
    value: 'Тест value',
    status: 'New',
    createDate: new Date(),
    updateDate: new Date()
  },
  {
    code: '1',
    value: 'Тест value',
    status: 'New',
    createDate: new Date(),
    updateDate: new Date()
  }
]

interface IEditorProvider {
  children: React.ReactNode
}

const EditorProvider: React.FC<IEditorProvider> = ({ children }) => {
  const records = mockData

  const [selectItemId, setSelectItemId] = useState<RecordCode>()

  useEffect(() => {
    setSelectItemId(records[0].code)
  }, [records])

  const editorContext: IEditorContext = {
    records: records,
    selectRecordsId: selectItemId,
    setSelectRecordsId: (code) => setSelectItemId(code)
  }

  return <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
}
export default EditorProvider

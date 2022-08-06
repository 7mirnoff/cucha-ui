import React, { useContext, useEffect, useState } from 'react'

import { useAsync } from 'react-use'

import { IRecord, RecordCode } from '../../model/record'
import { ApiContext } from '../api'
import EditorContext, { IEditorContext } from './editor-context'

interface IEditorProvider {
  children: React.ReactNode
}

const EditorProvider: React.FC<IEditorProvider> = ({ children }) => {
  const api = useContext(ApiContext)

  const recordsOps = useAsync(async () => await api.recordService?.getAllRecords(), [])

  const [selectItemId, setSelectItemId] = useState<RecordCode>()
  const [records, setRecords] = useState<IRecord[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (recordsOps.value) {
      setRecords(recordsOps.value ?? [])
    }

    if (!recordsOps.loading) {
      setIsLoading(false)
    }
  }, [recordsOps.loading])

  if (recordsOps.loading) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>Загрузка</div>
    )
  }

  if (recordsOps.error) {
    return <>Ошибка получения записей {recordsOps.error.message}</>
  }

  const editorContext: IEditorContext = {
    isLoading: isLoading,
    records: records,
    selectRecordsId: selectItemId,
    setSelectRecordsId: (code) => setSelectItemId(code),
    createRecord: async (value) => {
      const newRecord = await api.recordService.createRecord({ value: value })
      setRecords((prevRecord) => [newRecord, ...prevRecord])
    }
  }

  return <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
}
export default EditorProvider

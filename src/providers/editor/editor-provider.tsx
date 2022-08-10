import React, { useContext, useEffect, useState } from 'react'

import { useAsyncRetry } from 'react-use'

import { RecordCode } from '../../model/record'
import { ApiContext } from '../api'
import EditorContext, { IEditorContext } from './editor-context'

interface IEditorProvider {
  children: React.ReactNode
}

const EditorProvider: React.FC<IEditorProvider> = ({ children }) => {
  const api = useContext(ApiContext)

  const recordsOps = useAsyncRetry(async () => await api.recordService?.getAllRecords(), [])

  const [selectItemId, setSelectItemId] = useState<RecordCode>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!recordsOps.loading) {
      setIsLoading(false)
    }
  }, [recordsOps.loading])

  if (recordsOps.loading && !recordsOps.value) {
    return (
      <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>Загрузка</div>
    )
  }

  if (recordsOps.error) {
    return <>Ошибка получения записей {recordsOps.error.message}</>
  }

  const editorContext: IEditorContext = {
    isLoading: isLoading,
    records: recordsOps.value ?? [],
    selectRecordCode: selectItemId,
    setSelectRecordCode: (code) => setSelectItemId(code),
    createRecord: async (value) => {
      const newRecord = await api.recordService.createRecord({ value: value })
      recordsOps.retry()
      return newRecord
    },
    saveRecord: async (record) => {
      await api.recordService.saveRecord(record)
      recordsOps.retry()
    }
  }

  return <EditorContext.Provider value={editorContext}>{children}</EditorContext.Provider>
}
export default EditorProvider

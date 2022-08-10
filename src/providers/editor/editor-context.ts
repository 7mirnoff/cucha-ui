import React from 'react'

import { IRecord, RecordCode } from '../../model/record'

export interface IEditorContext {
  isLoading: boolean
  records: IRecord[]
  selectRecordCode?: RecordCode
  setSelectRecordCode: (code: RecordCode) => void
  createRecord: (value: string) => Promise<IRecord>
  saveRecord: (record: IRecord) => Promise<void>
}

const EditorContext = React.createContext<IEditorContext>({} as IEditorContext)
export default EditorContext

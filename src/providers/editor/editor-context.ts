import React from 'react'

import { IRecord, RecordCode } from '../../model/record'

export interface IEditorContext {
  isLoading: boolean
  records: IRecord[]
  selectRecordsId?: RecordCode
  setSelectRecordsId: (code: RecordCode) => void
  createRecord: (value: string) => Promise<void>
}

const EditorContext = React.createContext<IEditorContext | undefined>(undefined)
export default EditorContext

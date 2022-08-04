import React from 'react'

import { IRecord, RecordCode } from '../../model/record'

export interface IEditorContext {
  records: IRecord[]
  selectRecordsId?: RecordCode
  setSelectRecordsId: (code: RecordCode) => void
}

const EditorContext = React.createContext<IEditorContext | undefined>(undefined)
export default EditorContext

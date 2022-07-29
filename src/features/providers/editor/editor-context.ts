import React from 'react'

export interface IRecord {
  id: number
  value?: string
}

export interface IEditorContext {
  records: IRecord[]
  selectRecordsId?: number
  setSelectRecordsId: (id: number) => void
}

const EditorContext = React.createContext<IEditorContext | undefined>(undefined)
export default EditorContext
